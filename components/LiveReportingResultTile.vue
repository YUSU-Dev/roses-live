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
        <p v-if="York.outcome === 'Win'" class="xcond font-bold text-3xl">
          York Win
        </p>
        <p
          v-else-if="Lancaster.outcome === 'Win'"
          class="xcond font-bold text-3xl text-roses-red"
        >
          Lancaster Win
        </p>
        <p v-else-if="York.outcome === 'Draw'" class="xcond font-bold text-3xl">
          Draw
        </p>
        <p
          v-else-if="York.outcome === 'Forfeit'"
          class="xcond font-bold text-3xl"
        >
          York Forfeit
        </p>
        <p
          v-else-if="coverage.teams[1].outcome === 'Forfeit'"
          class="xcond font-bold text-3xl text-roses-red"
        >
          Lancaster Forfeit
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
              {{ YorkScore }}
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl order-2 sm:order-1">
            LANCASTER
          </p>
          <div class="scoreTile scoreTileLancaster order-1 sm:order-2">
            <p class="text-xl lg:text-2xl">
              {{ LancasterScore }}
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
  data() {
    return {
      yorkCollectionId: "clt4mx9jb0005rtqtslh1o6id",
      lancasterCollectionId: "cm7uoj6qj000xt301imx1eu2w",
      York: {},
      Lancaster: {},
      YorkScore: null,
      LancasterScore: null,
    };
  },
  mounted() {
    this.formatTeams();
  },
  methods: {
    formatTime(isoString) {
      const date = new Date(isoString);
      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    formatTeams() {
      this.York = this.coverage.teams.find(
        (team) => team.team.collectionId === this.yorkCollectionId,
      );
      this.Lancaster = this.coverage.teams.find(
        (team) => team.team.collectionId === this.lancasterCollectionId,
      );

      if (this.York.result.frames) {
        this.York.result.score = this.York.result.frames;
      }
      if (this.Lancaster.result.frames) {
        this.Lancaster.result.score = this.Lancaster.result.frames;
      }

      this.YorkScore = this.York ? this.York.result.score : null;
      this.LancasterScore = this.Lancaster ? this.Lancaster.result.score : null;

      if (this.YorkScore !== null) {
        this.YorkScore = this.formatScore(this.YorkScore);
      }
      if (this.LancasterScore !== null) {
        this.LancasterScore = this.formatScore(this.LancasterScore);
      }
    },
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
  },
};
</script>
