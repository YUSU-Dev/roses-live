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
    map.on("load", () => {
      map.addSource("locations", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: this.formattedLocations,
        },
      });
      map.addLayer({
        id: "locations",
        type: "circle",
        source: "locations",
        paint: {
          "circle-radius": 8,
          "circle-color": "#ffffff",
          "circle-stroke-width": 3,
          "circle-stroke-color": "#000000",
          "circle-opacity": 0.8,
        },
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
      console.log(this.formattedLocations);
    },
  },
};
</script>
