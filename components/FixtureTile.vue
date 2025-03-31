<template>
  <div class="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row fixtureTile">
    <div class="fixtureTime">
      <p
        class="font-semibold text-xl lg:text-2xl w-15 flex lg:justify-center items-center"
      >
        {{ formattedTime }}
      </p>
    </div>
    <div class="flex flex-col gap-2 lg:gap-0 flex-grow fixtureDetails">
      <div class="flex flex-wrap gap-2 text-xl lg:text-2xl">
        <h3 class="font-bold">{{ fixture.sport.name }}</h3>
        <p v-if="York.team" class="">{{ York.team.name }}</p>
      </div>
      <div class="flex justify-between">
        <p v-if="fixture.location">{{ fixture.location.name }}</p>
        <p
          v-if="fixture.scoringRules[0].pointsValue !== 0"
          class="block lg:hidden whitespace-nowrap"
        >
          {{ fixture.scoringRules[0].pointsValue }} POINTS
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2 lg:pr-24 lg:pl-16">
      <div
        class="flex items-center justify-start sm:justify-end gap-6 sm:gap-8"
      >
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl">YORK</p>
          <div class="scoreTile scoreTileYork">
            <p v-if="York && York.result" class="text-xl lg:text-2xl">
              {{ formatScore(York.result.score) }}
            </p>
            <p v-else class="">
              <i class="fa-regular fa-clock"></i>
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl">LANCASTER</p>
          <div class="scoreTile scoreTileLancaster">
            <p v-if="Lancaster && Lancaster.result" class="text-xl lg:text-2xl">
              {{ formatScore(Lancaster.result.score) }}
            </p>
            <p v-else class="">
              <i class="fa-regular fa-clock"></i>
            </p>
          </div>
        </div>
        <div v-if="fixture.startsAt" class="hidden md:flex items-center">
          <add-to-calendar
            :start-date="fixture.startsAt"
            :end-date="fixture.endsAt"
            :title="fixture.sport.name + ' - ' + teamName"
            :description="
              'Follow all the action live on roseslive.co.uk! Brought to you by York SU (yorksu.org). Fixture Details: https://roseslive.co.uk/activities/' +
              fixture.sport.slug
            "
            :location="fixture.location.name"
          />
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-end">
        <p
          v-if="fixture.scoringRules[0].pointsValue !== 0"
          class="whitespace-nowrap"
        >
          {{ fixture.scoringRules[0].pointsValue }} POINTS
        </p>
      </div>
      <div v-if="fixture.startsAt" class="md:hidden flex justify-end">
        <add-to-calendar
          :start-date="fixture.startsAt"
          :end-date="fixture.endsAt"
          :title="'Roses 2025 | ' + fixture.sport.name + ' - ' + teamName"
          :description="
            'Follow all the action live on roseslive.co.uk! Brought to you by York SU (yorksu.org). Fixture Details: https://roseslive.co.uk/activities/' +
            fixture.sport.slug
          "
          :location="fixture.location.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import addToCalendar from "~/components/addToCalendar.vue";
export default {
  name: "FixtureTile",
  components: {
    addToCalendar,
  },
  props: {
    fixture: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      yorkCollectionId: "clt4mx9jb0005rtqtslh1o6id",
      lancasterCollectionId: "clt4mxczy0007rtqtmz2ljm2t",
      York: {},
      Lancaster: {},
    };
  },
  computed: {
    formattedTime() {
      const date = new Date(this.fixture.startsAt);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    teamName() {
      const team = this.fixture.teams.find(
        (team) => team.team.collectionId === this.yorkCollectionId,
      );
      return team ? team.team.name : null;
    },
  },
  mounted() {
    this.formatTeams();
  },
  methods: {
    formatTeams() {
      this.York = this.fixture.teams.find(
        (team) => team.team.collectionId === this.yorkCollectionId,
      );
      this.Lancaster = this.fixture.teams.find(
        (team) => team.team.collectionId === this.lancasterCollectionId,
      );
    },
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
  },
};
</script>
