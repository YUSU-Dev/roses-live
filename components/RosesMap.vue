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
      formattedChildLocations: [],
      activeLocation: null,
      userCoordinates: null,
      route: null,
      currentPopup: null,
      venues: [],
      formattedVenues: [],
    };
  },
  mounted() {
    const urlLocationId = this.$route.query.location;
    this.getLocations();
    mapboxgl.accessToken =
      "pk.eyJ1IjoieXVzdWRldjAiLCJhIjoiY204em5udWdmMGRweTJxcjI2NHFoaWNudiJ9.Cn9SDKmXPg9AY0xa5LfUmQ";
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
      map.addSource("childLocations", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: this.formattedChildLocations,
        },
        generateId: true,
      });
      map.addSource("venues", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: this.formattedVenues,
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
      map.addLayer({
        id: "childLocations",
        type: "circle",
        source: "childLocations",
        minzoom: 16,
        paint: {
          "circle-radius": [
            "case",
            ["boolean", ["feature-state", "active"], false],
            10,
            6,
          ],
          "circle-color": "#000000",
          "circle-stroke-width": 3,
          "circle-stroke-color": "#000000",
          "circle-opacity": 0.8,
          "circle-radius-transition": {
            duration: 500,
          },
        },
      });
      map.addLayer({
        id: "childLocations-labels",
        type: "symbol",
        source: "childLocations",
        minzoom: 16,
        layout: {
          "text-field": "{name}",
          "text-font": ["Poppins Medium"],
          "text-size": 12,
          "text-offset": [0, 1],
          "text-anchor": "top",
        },
      });
      map.addLayer({
        id: "venues",
        type: "circle",
        source: "venues",
        paint: {
          "circle-radius": 6,
          "circle-color": "#ffffff",
          "circle-stroke-width": 3,
          "circle-stroke-color": "#000000",
          "circle-opacity": 0.8,
        },
      });
      map.addLayer({
        id: "venues-labels",
        type: "symbol",
        source: "venues",
        minzoom: 12,
        layout: {
          "text-field": "{name}",
          "text-font": ["Poppins Medium"],
          "text-size": 14,
          "text-offset": [0, 1.5],
          "text-anchor": "top",
        },
      });
      if (urlLocationId) {
        const locationFeature =
          this.formattedLocations.find(
            (feature) => feature.properties.id === urlLocationId,
          ) ||
          this.formattedChildLocations.find(
            (feature) => feature.properties.id === urlLocationId,
          );

        if (locationFeature) {
          this.updateActiveLocation({ features: [locationFeature] });
        }
      }
      map.on("mouseenter", "locations", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "locations", () => {
        map.getCanvas().style.cursor = "";
      });
      map.on("mouseenter", "childLocations", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "childLocations", () => {
        map.getCanvas().style.cursor = "";
      });
      map.on("mouseenter", "venues", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "venues", () => {
        map.getCanvas().style.cursor = "";
      });
      map.on("click", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["locations", "childLocations", "venues"],
        });

        if (features.length) {
          const feature = features[0];
          const layerId = feature.layer.id;
          const coordinates = feature.geometry.coordinates.slice();
          const name = feature.properties.name;
          const id = feature.properties.id;
          let facilities = feature.properties.facilities;

          try {
            facilities = JSON.parse(facilities);
          } catch {
            facilities = [];
          }

          let facilityContent = "";
          if (facilities && facilities.length > 0) {
            for (let i = 0; i < facilities.length; i++) {
              let facilityDescription = "";
              if (facilities[i].description) {
                facilityDescription = `<p class="text-sm">${facilities[i].description}</p>`;
              }
              facilityContent += `
                <div class="flex flex-col gap-1">
                  <h4 class="text-base">${facilities[i].name}</h4>
                  ${facilityDescription}
                </div>
              `;
            }
          }

          const facilitiesContainer =
            facilities && facilities.length > 0
              ? `<div class="flex flex-col gap-2"><h3 class="text-lg"">Facilities</h3>${facilityContent}</div>`
              : "";

          let fixturesButton =
            layerId === "childLocations" ||
            (!feature.properties.parent && layerId !== "venues")
              ? `<a href="/fixtures?location=${id}" id="fixturesButton" class="bg-roses-red text-white px-6 py-2 rounded-full text-center hover:cursor-pointer">Fixtures</a>`
              : "";

          if (layerId === "venues") {
            fixturesButton = `<a href="/food-and-drink" id="fixturesButton" class="bg-roses-red text-white px-6 py-2 rounded-full text-center hover:cursor-pointer">See more</a>`;
          }

          const parentName =
            layerId === "childLocations"
              ? `<p class="text-sm">${feature.properties.parentName}</p>`
              : "";

          this.currentPopup = new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(
              `
        <div class="flex flex-col p-1 gap-4">
          <div class="flex flex-col gap-1">
            ${parentName}
            <h2 class="text-2xl xcond">${name}</h2>
          </div>
          ${facilitiesContainer}
          <div class="flex w-full justify-center gap-2">
            <button id="directionsButton" class="bg-roses-red text-white px-6 py-2 rounded-full text-center hover:cursor-pointer">Directions</button>
            ${fixturesButton}
          </div>
        </div>
      `,
            )
            .addTo(map);

          this.$nextTick(() => {
            const directionsButton =
              document.getElementById("directionsButton");
            if (directionsButton) {
              directionsButton.addEventListener("click", () => {
                this.getRoute(coordinates);
              });
            }
          });

          this.updateActiveLocation({ features });
        } else {
          if (this.activeLocation) {
            this.map.setFeatureState(
              { source: "locations", id: this.activeLocation },
              { active: false },
            );
          }
          this.activeLocation = null;
        }
      });
      map.on("zoom", () => {
        const zoomLevel = map.getZoom();
        if (this.currentPopup && this.activeLocation) {
          const sourceFeatures = this.map.querySourceFeatures(
            "childLocations",
            {
              sourceLayer: "childLocations",
            },
          );
          const activeFeature = sourceFeatures.find(
            (feature) => feature.id === this.activeLocation,
          );
          if (activeFeature && zoomLevel < 16) {
            this.currentPopup.remove();
            this.currentPopup = null;
            this.activeLocation = null;
          }
        }
      });
    });
  },
  methods: {
    async getLocations() {
      this.locations = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/locations",
      );
      this.venues = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm99ujvqk000tpd01wfemt29p/locations",
      );
      for (let i = 0; i < this.locations.length; i++) {
        this.formattedLocations.push({
          type: "Feature",
          properties: {
            name: this.locations[i].name,
            id: this.locations[i].id,
            facilities: this.locations[i].facilities,
            parent: this.locations[i].children.length > 0,
          },
          geometry: {
            type: "Point",
            coordinates: [
              this.locations[i].longitude,
              this.locations[i].latitude,
            ],
          },
        });
        if (this.locations[i].children.length > 0) {
          for (let j = 0; j < this.locations[i].children.length; j++) {
            this.formattedChildLocations.push({
              type: "Feature",
              properties: {
                name: this.locations[i].children[j].name,
                id: this.locations[i].children[j].id,
                facilities: this.locations[i].children[j].facilities,
                parentId: this.locations[i].id,
                parentName: this.locations[i].name,
              },
              geometry: {
                type: "Point",
                coordinates: [
                  this.locations[i].children[j].longitude,
                  this.locations[i].children[j].latitude,
                ],
              },
            });
          }
        }
      }
      this.venues.forEach((venue) => {
        this.formattedVenues.push({
          type: "Feature",
          properties: {
            name: venue.name,
            id: venue.id,
          },
          geometry: {
            type: "Point",
            coordinates: [venue.longitude, venue.latitude],
          },
        });
      });
    },
    updateActiveLocation(location) {
      if (location.features[0].id) {
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
      }
      this.map.flyTo({
        center: [
          location.features[0].geometry.coordinates[0],
          location.features[0].geometry.coordinates[1],
        ],
        zoom: location.features[0].layer
          ? location.features[0].layer.id === "locations" ||
            location.features[0].layer.id === "venues"
            ? 17
            : 19
          : 16,
      });
    },
    async getRoute(destination) {
      if (this.userCoordinates) {
        this.route = await $fetch(
          `https://api.mapbox.com/directions/v5/mapbox/walking/${this.userCoordinates[0]},${this.userCoordinates[1]};${destination}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        );
      } else {
        this.route = await $fetch(
          `https://api.mapbox.com/directions/v5/mapbox/walking/-1.055034237300904,53.94578819348761;${destination}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        );
      }
      this.route = this.route.routes[0].geometry.coordinates;
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
        maxZoom: 16,
        duration: 1000,
      });
    },
  },
};
</script>
