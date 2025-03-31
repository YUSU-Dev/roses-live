<template>
  <div>
    <HeroBanner
      title="FIXTURES"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Fixtures.png"
    />
    <div class="container mx-auto py-28">
      <div class="pb-12 lg:pb-28 flex flex-col gap-8">
        <DayFilters :search-term="searchTerm" @select-day="updateDay" />
        <FixtureSearch ref="fixtureSearch" @search="updateSearch" />
      </div>
      <div v-if="selectedDay !== 'activities'">
        <div v-if="!loading">
          <div
            v-for="(dayFixtures, date) in groupedFixtures"
            :key="date"
            class="not-last:mb-20"
          >
            <h2 v-if="date" class="text-3xl font-bold lg:pl-13 mb-4 lg:mb-10">
              {{ date }}
            </h2>
            <a
              v-for="fixture in dayFixtures"
              :key="fixture.id"
              :href="'activities/' + fixture.sport.slug"
            >
              <FixtureTile :fixture="fixture" />
            </a>
          </div>
        </div>
        <div v-else>
          <LoadingFixtureTile />
        </div>
      </div>
      <div v-else>
        <div
          class="flex justify-between items-center lg:px-24 border-b border-slate-300 py-5"
        >
          <h2>Activity</h2>
          <h2>Fixtures</h2>
        </div>
        <ActivityTile
          v-for="activity in activities"
          :key="activity.name"
          :activity="activity"
        />
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
import ActivityTile from "~/components/ActivityTile.vue";
import { groupBy } from "lodash";
export default {
  name: "FixturesPage",
  components: {
    HeroBanner,
    FixtureTile,
    DayFilters,
    FixtureSearch,
    LoadingFixtureTile,
    ActivityTile,
  },
  data() {
    return {
      fixtures: [],
      activities: [],
      selectedDay: null,
      loading: true,
      searchTerm: "",
    };
  },
  computed: {
    groupedFixtures() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      return groupBy(this.fixtures, (fixture) => {
        return new Date(fixture.startsAt).toLocaleDateString("en-GB", options);
      });
    },
  },
  mounted() {
    useAsyncData(() => this.fetchFixtures());
  },
  methods: {
    async fetchFixtures() {
      this.loading = true;
      let parameters = "";
      if (this.selectedDay && this.searchTerm === "") {
        parameters +=
          "startsAt=" +
          this.selectedDay.startsAt +
          "&endsAt=" +
          this.selectedDay.endsAt;
      } else if (this.searchTerm !== "") {
        parameters = "&query=" + this.searchTerm;
      }
      this.fixtures = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures?" +
          parameters,
      );
      this.fixtures = this.fixtures.sort((a, b) => {
        return new Date(a.startsAt) - new Date(b.startsAt);
      });
      this.loading = false;
    },
    async fetchActivities() {
      let parameters = "";
      if (this.searchTerm !== "") {
        parameters = "query=" + this.searchTerm;
      }
      this.activities = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/sports?" +
          parameters,
      );
      this.activities = this.activities.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
    updateDay(day) {
      this.selectedDay = day;
      if (this.selectedDay === "activities") {
        this.searchTerm = "";
        this.$refs.fixtureSearch.$refs.searchInput.value = "";
        this.fetchActivities();
        return;
      }
      if (this.selectedDay !== null && this.searchTerm !== "") {
        this.searchTerm = "";
        this.$refs.fixtureSearch.$refs.searchInput.value = "";
      }
      this.fetchFixtures();
    },
    updateSearch(search) {
      this.searchTerm = search;
      if (this.selectedDay === "activities") {
        this.fetchActivities();
        return;
      }
      if (this.searchTerm === "") {
        this.selectedDay = this.$refs.dayFilters.selectedDay;
      }
      this.fetchFixtures();
    },
  },
};
useHead({
  title: "Fixtures",
});
</script>
