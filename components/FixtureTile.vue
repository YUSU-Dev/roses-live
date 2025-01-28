<template>
  <div class="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row fixtureTile">
    <div class="fixtureTime">
      <p class="font-semibold text-xl lg:text-2xl">{{ formattedTime }}</p>
    </div>
    <div class="flex flex-col gap-2 lg:gap-0 flex-grow fixtureDetails">
      <div class="flex flex-wrap gap-2 text-xl lg:text-2xl">
        <h3 class="font-bold">{{ fixture.sport }}</h3>
        <p class="">{{ fixture.team }}</p>
      </div>
      <div class="flex justify-between">
        <p>{{ fixture.location }}</p>
        <p
          v-if="fixture.pointsAvailable"
          class="block lg:hidden whitespace-nowrap"
        >
          {{ fixture.pointsAvailable }} POINTS
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div
        class="flex items-center justify-start sm:justify-end gap-6 sm:gap-8"
      >
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl">YORK</p>
          <div class="scoreTile scoreTileYork">
            <p class="text-xl lg:text-2xl">
              {{ formatScore(fixture.YorkScore) }}
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <p class="font-semibold text-lg lg:text-2xl">LANCASTER</p>
          <div class="scoreTile scoreTileLancaster">
            <p class="text-xl lg:text-2xl">
              {{ formatScore(fixture.LancasterScore) }}
            </p>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-end">
        <p v-if="fixture.pointsAvailable" class="whitespace-nowrap">
          {{ fixture.pointsAvailable }} POINTS
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixtureTile",
  props: {
    fixture: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    formattedTime() {
      const date = new Date(this.fixture.date);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
  },
  methods: {
    formatScore(score) {
      return score.toString().padStart(2, "0");
    },
  },
};
</script>
