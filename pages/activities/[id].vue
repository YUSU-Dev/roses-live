<template>
  <div>
    <HeroBanner
      title="ACTIVITIES"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Fixtures.png"
    />
    <div class="container mx-auto py-28">
      <div class="pb-12 lg:pb-28 flex flex-col gap-8">
        <DayFilters />
      </div>
      <div
        class="flex justify-between items-center lg:px-24 border-b border-slate-300 py-5"
      >
        <h2>Activity</h2>
        <h2>Fixtures</h2>
      </div>
      <a
        v-for="activity in activities"
        :key="activity.name"
        class="flex justify-between items-center lg:px-24 border-b border-slate-300 py-5 group overflow-hidden"
        :href="activity.href"
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
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import DayFilters from "~/components/DayFilters.vue";
export default {
  name: "FixturesPage",
  components: {
    HeroBanner,
    DayFilters,
  },
  props: {
    activities: {
      type: Array,
      default() {
        return [
          {
            name: "Football",
            href: "/fixtures/football",
          },
          {
            name: "Equestrian",
            href: "/fixtures/equestrian",
          },
        ];
      },
    },
  },
};
</script>
