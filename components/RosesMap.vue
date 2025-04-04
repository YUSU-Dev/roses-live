<template>
  <div id="map-container" class="h-150"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  data() {
    return {
      map: null,
      locations: [],
      formattedLocations: [],
      activeLocation: null,
      userCoordinates: null,
      route: null,
      currentPopup: null,
    };
  },
  mounted() {
    this.getLocations();
    mapboxgl.accessToken =
      "pk.eyJ1IjoieXVzdWRldjAiLCJhIjoiY20wcDd1emdqMDJjaTJxc2xqMjNmaTR4ZCJ9.IFewc52P-oNoevNrhzDB5A";
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-1.055034237300904, 53.94578819348761],
      zoom: 15,
    });
    this.map = map;
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    geolocate._updateCamera = () => {};
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.addControl(geolocate, "top-right");
    map.on("load", () => {
      geolocate.trigger();
      geolocate.on("geolocate", (e) => {
        this.userCoordinates = [e.coords.longitude, e.coords.latitude];
      });
      map.addSource("locations", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: this.formattedLocations,
        },
        generateId: true,
      });
      map.addLayer({
        id: "locations",
        type: "circle",
        source: "locations",
        paint: {
          "circle-radius": [
            "case",
            ["boolean", ["feature-state", "active"], false],
            10,
            6,
          ],
          "circle-color": "#ffffff",
          "circle-stroke-width": 3,
          "circle-stroke-color": "#000000",
          "circle-opacity": 0.8,
          "circle-radius-transition": {
            duration: 500,
          },
        },
      });
      map.addLayer({
        id: "locations-labels",
        type: "symbol",
        source: "locations",
        minzoom: 12,
        layout: {
          "text-field": "{name}",
          "text-font": ["Poppins Medium"],
          "text-size": 14,
          "text-offset": [0, 1.5],
          "text-anchor": "top",
        },
      });
      map.on("mouseenter", "locations", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "locations", () => {
        map.getCanvas().style.cursor = "";
      });
      map.on("click", "locations", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const name = e.features[0].properties.name;
        let facilities = e.features[0].properties.facilities;
        try {
          facilities = JSON.parse(facilities);
        } catch {
          facilities = [];
        }
        const facilitiesHTML =
          facilities && facilities.length > 0
            ? `<div class="flex flex-col gap-2"><h3>Facilities</h3><p>${facilities}</p></div>`
            : "";
        this.currentPopup = new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `
      <div class="flex flex-col p-1 gap-4">
        <h2 class="text-2xl xcond">${name}</h2>
        ${facilitiesHTML}
        <div class="flex w-full justify-center"><button id="directionsButton" class="bg-roses-red text-white px-6 py-2 rounded-full text-center hover:cursor-pointer">Directions</button></div>
      </div>
    `,
          )
          .addTo(map);
        this.$nextTick(() => {
          const button = document.getElementById("directionsButton");
          if (button) {
            button.addEventListener("click", () => {
              this.getRoute(coordinates);
            });
          }
        });
        this.updateActiveLocation(e);
      });
      map.on("click", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["locations"],
        });
        if (!features.length) {
          if (this.activeLocation) {
            this.map.setFeatureState(
              { source: "locations", id: this.activeLocation },
              { active: false },
            );
          }
          this.activeLocation = null;
        }
      });
    });
  },
  methods: {
    async getLocations() {
      this.locations = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/locations",
      );
      this.formattedLocations = this.locations.map((location) => {
        return {
          type: "Feature",
          properties: {
            name: location.name,
            id: location.id,
            facilities: location.facilities,
          },
          geometry: {
            type: "Point",
            coordinates: [location.longitude, location.latitude],
          },
        };
      });
    },
    updateActiveLocation(location) {
      if (this.activeLocation) {
        this.map.setFeatureState(
          { source: "locations", id: this.activeLocation },
          { active: false },
        );
      }
      this.activeLocation = location.features[0].id;
      this.map.setFeatureState(
        { source: "locations", id: location.features[0].id },
        { active: true },
      );
      this.map.flyTo({
        center: [
          location.features[0].geometry.coordinates[0],
          location.features[0].geometry.coordinates[1],
        ],
        zoom: 15,
      });
    },
    async getRoute(destination) {
      if (this.userCoordinates) {
        this.route = await $fetch(
          `https://api.mapbox.com/optimized-trips/v1/mapbox/walking/${this.userCoordinates[0]},${this.userCoordinates[1]};${destination}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        );
      } else {
        this.route = await $fetch(
          `https://api.mapbox.com/optimized-trips/v1/mapbox/walking/-1.055034237300904,53.94578819348761;${destination}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        );
      }
      this.route = this.route.trips[0].geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: this.route,
        },
      };
      if (this.map.getLayer("route")) {
        this.map.getSource("route").setData(geojson);
      } else {
        this.map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#307CBF",
            "line-width": 5,
            "line-opacity": 1,
          },
        });
      }
      if (this.currentPopup) {
        this.currentPopup.remove();
        this.currentPopup = null;
      }
      const bounds = new mapboxgl.LngLatBounds();
      this.route.forEach((coord) => bounds.extend(coord));
      this.map.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 15,
        duration: 1000,
      });
    },
  },
};
</script>
