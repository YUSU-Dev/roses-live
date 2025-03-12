<template>
  <div class="w-full flex flex-col gap-2 lg:gap-0 sm:flex-row fixtureTile">
    <div class="flex gap-2">
      <div class="lg:pl-24 lg:pr-16 sm:border-r border-slate-300">
        <p
          class="font-semibold text-xl lg:text-2xl w-15 flex lg:justify-center items-center"
        >
          {{ new Date(historicFixture.startsAt).getFullYear() }}
        </p>
      </div>
      <div class="flex flex-col gap-2 lg:gap-0 flex-grow sm:pl-16">
        <div class="flex flex-wrap gap-2 text-xl lg:text-2xl">
          <h3 class="font-bold">
            {{ historicFixture.teams[0].team.name }}
          </h3>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2 lg:pr-24 lg:pl-16">
      <div
        class="flex items-center justify-start sm:justify-end gap-6 sm:gap-8"
      >
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl">YORK</p>
          <div class="scoreTile scoreTileYork">
            <p class="text-xl lg:text-2xl">
              {{ formatScore(historicFixture.teams[0].result.score) }}
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl">LANCASTER</p>
          <div class="scoreTile scoreTileLancaster">
            <p class="text-xl lg:text-2xl">
              {{ formatScore(historicFixture.teams[1].result.score) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoricFixtureTile",
  props: {
    historicFixture: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
  },
};
</script>
