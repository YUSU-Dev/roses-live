<template>
  <div class="flex py-6 gap-6">
    <div class="flex flex-col gap-4 w-full">
      <div class="flex gap-4 items-center">
        <p class="text-4xl xcond font-bold text-roses-red">
          {{ formatTime(coverage.publishedAt) }}
        </p>
        <div class="flex flex-col">
          <h3 class="text-xl font-bold">
            {{ coverage.fixture.sport }} -
            {{ coverage.fixture.name }}
          </h3>
          <p>{{ coverage.caption }}</p>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <NuxtImg
          provider="cloudflare"
          :src="coverage.fileName"
          class=""
          :alt="coverage.altText"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiveReportingPhotoTile",
  props: {
    coverage: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatTime(date) {
      return new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>
