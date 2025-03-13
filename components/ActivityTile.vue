<template>
  <a
    class="flex justify-between items-center lg:px-24 border-b border-slate-300 py-5 group overflow-hidden"
    :href="'activities/' + activity.slug"
  >
    <h2
      class="text-lg sm:text-xl font-bold activity-row-name md:group-hover:translate-x-5 transition-all uppercase"
    >
      {{ activity.name }}
    </h2>
    <i
      class="fa-solid fa-arrow-right text-roses-red text-xl sm:text-2xl md:group-hover:translate-x-5 transition-all"
    ></i>
  </a>
</template>

<script>
export default {
  name: "ActivityTile",
  props: {
    activity: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
