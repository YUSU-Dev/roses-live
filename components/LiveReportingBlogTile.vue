<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex py-6 gap-6">
    <div class="flex flex-col">
      <p class="text-4xl xcond font-bold text-roses-red">
        {{ formatTime(coverage.publishedAt) }}
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold">
        {{ coverage.fixture.sport }} - {{ coverage.fixture.name }}
      </h3>
      <div v-html="coverage.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiveReportingBlogTile",
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
