<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <HeroBanner
      :title="sport?.name"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Fixtures.png"
    />
    <div class="container mx-auto py-28">
      <div v-if="sport?.description" class="pb-12 lg:pb-28 key-rules">
        <h2 class="text-4xl font-bold text-roses-red mb-4 lg:mb-10">
          KEY RULES
        </h2>
        <div v-html="sport.description"></div>
      </div>
      <div v-if="!loading">
        <h2 class="text-4xl font-bold text-roses-red mb-4">CURRENT FIXTURES</h2>
        <div
          v-for="(dayFixtures, date) in groupedFixtures"
          :key="date"
          class="not-last:mb-20"
        >
          <h3 v-if="date" class="text-3xl font-bold mb-4 lg:mb-10">
            {{ date }}
          </h3>
          <FixtureTile
            v-for="fixture in dayFixtures"
            :key="fixture.id"
            :fixture="fixture"
          />
        </div>
      </div>
      <div v-else>
        <LoadingFixtureTile />
      </div>
      <RosesCarousel :sport="sport.slug" />
      <div class="py-12 lg:py-28">
        <h2 class="text-4xl font-bold text-roses-red mb-4">
          HISTORIC FIXTURES
        </h2>
        <HistoricFixtureTile
          v-for="historicFixture in historicFixtures"
          :key="historicFixture.id"
          :historic-fixture="historicFixture"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import FixtureTile from "~/components/FixtureTile.vue";
import LoadingFixtureTile from "~/components/LoadingFixtureTile.vue";
import HistoricFixtureTile from "~/components/HistoricFixtureTile.vue";
import { groupBy } from "lodash";
import RosesCarousel from "~/components/carousel.vue";
export default {
  name: "FixturesPage",
  components: {
    HeroBanner,
    FixtureTile,
    LoadingFixtureTile,
    HistoricFixtureTile,
    RosesCarousel,
  },
  data() {
    return {
      route: "",
      fixtures: {},
      historicFixtures: {},
      sport: {},
      loading: true,
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
  async mounted() {
    this.route = this.$route.params.id;
    await this.getSport();
  },
  methods: {
    async getSport() {
      this.loading = true;
      const [fixtures, historicFixtures, sport] = await Promise.all([
        $fetch(
          `https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures?sport=${this.route}`,
        ),
        $fetch(
          `https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo9rsm0009nn01x3q76tx7/fixtures?sport=${this.route}`,
        ),
        $fetch(
          `https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/sports/${this.route}`,
        ),
      ]);
      this.sport = sport;
      this.fixtures = fixtures;
      this.fixtures = this.fixtures.sort((a, b) => {
        return new Date(a.startsAt) - new Date(b.startsAt);
      });
      this.historicFixtures = historicFixtures;
      this.historicFixtures = this.historicFixtures.sort((a, b) => {
        return new Date(b.startsAt) - new Date(a.startsAt);
      });
      // SET PAGE TITLE
      useHead({
        title: `${this.sport?.name}`,
      });
      this.loading = false;
    },
  },
};
</script>
