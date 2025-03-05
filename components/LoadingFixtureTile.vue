<template>
  <div
    class="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row fixtureTile animate-pulse"
  >
    <div class="fixtureTime">
      <div
        class="w-15 h-5 flex lg:justify-center items-center bg-gray-200 rounded"
      ></div>
    </div>
    <div class="flex flex-col gap-2 flex-grow fixtureDetails">
      <div class="flex flex-wrap gap-2">
        <div class="w-50 h-6 bg-gray-200 rounded"></div>
        <div class="w-40 h-6 bg-gray-200 rounded"></div>
      </div>
      <div class="flex justify-between">
        <div class="w-60 h-4 bg-gray-200 rounded"></div>
        <div class="block lg:hidden w-20 h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
    <!-- <div class="flex flex-col gap-2 lg:pr-24 lg:pl-16">
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
      </div>
      <div class="hidden lg:flex items-center justify-end">
        <p
          v-if="fixture.scoringRules[0].pointsValue !== 0"
          class="whitespace-nowrap"
        >
          {{ fixture.scoringRules[0].pointsValue }} POINTS
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "LoadingFixtureTile",
};
</script>
