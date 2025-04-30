<template>
  <div class="flex py-6 gap-6">
    <div class="flex flex-col">
      <p class="text-4xl xcond font-bold text-roses-red">
        {{ formatTime(coverage.competitionPoints[0].createdAt) }}
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold">
        {{ coverage.sport.name }} -
        {{ coverage.teams[0].team.name }}
      </h3>
      <div>
        <p
          v-if="coverage.teams[0].outcome === 'Win'"
          class="xcond font-bold text-3xl"
        >
          York Win
        </p>
        <p
          v-else-if="coverage.teams[1].outcome === 'Win'"
          class="xcond font-bold text-3xl text-roses-red"
        >
          Lancaster Win
        </p>
        <p
          v-else-if="coverage.teams[0].outcome === 'Draw'"
          class="xcond font-bold text-3xl"
        >
          Draw
        </p>
        <p
          v-if="coverage.scoringRules[0].pointsValue > 0"
          class="text-lg font-semibold"
        >
          {{ coverage.scoringRules[0].pointsValue }} POINT{{
            coverage.scoringRules[0].pointsValue === 1 ? "" : "S"
          }}
        </p>
        <p v-else class="text-lg font-semibold">Exhibition Fixture</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full">
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl order-2 sm:order-1">
            YORK
          </p>
          <div class="scoreTile scoreTileYork order-1 sm:order-2">
            <p class="text-xl lg:text-2xl">
              {{ formatScore(coverage.teams[0].result.score) }}
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl order-2 sm:order-1">
            LANCASTER
          </p>
          <div class="scoreTile scoreTileLancaster order-1 sm:order-2">
            <p class="text-xl lg:text-2xl">
              {{ formatScore(coverage.teams[1].result.score) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiveReportingResultTile",
  props: {
    coverage: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatTime(isoString) {
      const date = new Date(isoString);
      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
  },
};
</script>
