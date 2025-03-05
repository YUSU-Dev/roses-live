<template>
  <div>
    <HeroBanner
      title="FIXTURES"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Fixtures.png"
    />
    <div class="container mx-auto py-28">
      <div class="pb-12 lg:pb-28 flex flex-col gap-8">
        <DayFilters @select-day="updateDay" />
        <FixtureSearch />
      </div>
      <div v-if="!loading">
        <FixtureTile
          v-for="fixture in fixtures"
          :key="fixture.id"
          :fixture="fixture"
        />
      </div>
      <div v-else>
        <LoadingFixtureTile />
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import FixtureTile from "~/components/FixtureTile.vue";
import DayFilters from "~/components/DayFilters.vue";
import FixtureSearch from "~/components/FixtureSearch.vue";
import LoadingFixtureTile from "~/components/LoadingFixtureTile.vue";
export default {
  name: "FixturesPage",
  components: {
    HeroBanner,
    FixtureTile,
    DayFilters,
    FixtureSearch,
    LoadingFixtureTile,
  },
  data() {
    return {
      fixtures: [],
      selectedDay: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchFixtures();
  },
  methods: {
    async fetchFixtures() {
      this.loading = true;
      const response = await fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures?" +
          "startsAt=" +
          this.selectedDay.startsAt +
          "&endsAt=" +
          this.selectedDay.endsAt,
      );
      this.fixtures = await response.json();
      this.fixtures = this.fixtures.sort((a, b) => {
        return new Date(a.startsAt) - new Date(b.startsAt);
      });
      this.loading = false;
    },
    updateDay(day) {
      console.log(day);
      this.selectedDay = day;
      this.fetchFixtures();
    },
  },
};
</script>
