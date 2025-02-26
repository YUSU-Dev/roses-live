<template>
  <div>
    <HeroBanner
      title="FIXTURES"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Fixtures.png"
    />
    <div class="container mx-auto py-28">
      <div class="pb-12 lg:pb-28 flex flex-col gap-8">
        <DayFilters />
        <FixtureSearch />
      </div>
      <FixtureTile
        v-for="fixture in fixtures"
        :key="fixture.id"
        :fixture="fixture"
      />
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import FixtureTile from "~/components/FixtureTile.vue";
import DayFilters from "~/components/DayFilters.vue";
import FixtureSearch from "~/components/FixtureSearch.vue";
export default {
  name: "FixturesPage",
  components: {
    HeroBanner,
    FixtureTile,
    DayFilters,
    FixtureSearch,
  },
  props: {
    fixtures: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            date: "2025-05-02T15:00:00",
            sport: "Football",
            team: "Men's 1st",
            location: "22 Acres",
            pointsAvailable: 2,
            YorkScore: 0,
            LancasterScore: 0,
          },
          {
            id: 2,
            date: "2025-05-02T15:00:00",
            sport: "Equestrian",
            team: "2nd team",
            location: "Harrogate Riding Centre",
            pointsAvailable: 2,
            YorkScore: 0,
            LancasterScore: 0,
          },
        ];
      },
    },
  },
};
</script>
