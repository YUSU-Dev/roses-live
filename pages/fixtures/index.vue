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
  data() {
    return {
      fixtures: [],
    };
  },
  mounted() {
    this.fetchFixtures();
  },
  methods: {
    async fetchFixtures() {
      const response = await fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/clt4n09g7000hrtqt660v90bp/fixtures",
      );
      this.fixtures = await response.json();
      this.fixtures = this.fixtures.sort((a, b) => {
        return new Date(a.startsAt) - new Date(b.startsAt);
      });
      console.log(this.fixtures);
    },
  },
};
</script>
