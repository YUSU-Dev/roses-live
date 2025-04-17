<template>
  <div class="flex flex-col gap-18 md:gap-12 xcond font-bold">
    <div class="flex flex-col justify-center items-center gap-2 text-5xl">
      <h2 class="text-center">POINTS REQUIRED TO WIN</h2>
      <p class="">{{ pointsToWin }}</p>
    </div>
    <div
      class="relative flex justify-center text-4xl md:text-5xl border-t-2 border-black md:border-0"
    >
      <div
        class="flex flex-col gap-4 w-2/4 items-center md:items-start justify-end md:justify-center"
      >
        <p class="order-3 md:order-1">{{ york.points }}</p>
        <div class="flex items-end md:hidden order-2 h-[24rem]">
          <div
            :style="{
              height: (york.points / pointsToWin) * 100 + '%',
            }"
            class="w-30 bg-black"
          ></div>
        </div>
        <div
          :style="{
            width: (york.points / pointsToWin) * 100 + '%',
          }"
          class="h-10 bg-black hidden md:block order-2"
        ></div>
        <p class="order-2 md:order-3">YORK</p>
      </div>
      <div class="absolute h-full hidden flex-col items-center gap-2 md:flex">
        <img
          src="https://assets-cdn.sums.su/YU/website/img/Roses/Trophy_icon.webp"
          alt=""
          class="w-9"
        />
        <div class="w-[2px] bg-black h-20"></div>
      </div>
      <div class="absolute flex md:hidden p-2 -top-7 bg-white">
        <img
          src="https://assets-cdn.sums.su/YU/website/img/Roses/Trophy_icon.webp"
          alt=""
          class="w-9"
        />
      </div>
      <div
        class="flex flex-col gap-4 w-2/4 items-center md:items-end justify-end md:justify-start"
      >
        <p class="order-3 md:order-1">{{ Lancaster.points }}</p>
        <div
          :style="{
            height: (Lancaster.points / pointsToWin) * 100 + '%',
          }"
          class="w-30 bg-roses-red block md:hidden order-2"
        ></div>
        <div
          :style="{
            width: (Lancaster.points / pointsToWin) * 100 + '%',
          }"
          class="h-10 bg-roses-red hidden md:block order-2"
        ></div>
        <p class="order-2 md:order-3">LANCASTER</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPointsAvailable: 0,
      pointsToWin: 0,
      york: {
        points: 0,
      },
      Lancaster: {
        points: 0,
      },
    };
  },
  mounted() {
    this.getPoints();
  },
  methods: {
    async getPoints() {
      const response = await $fetch(
        "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l",
      );
      this.totalPointsAvailable = response.competitionInfo.totalPointsAvailable;
      this.pointsToWin = this.totalPointsAvailable / 2 + 0.5;
      this.york.points = response.competitionInfo.pointsByCollection.York || 0;
      this.Lancaster.points =
        response.competitionInfo.pointsByCollection.Lancaster || 0;
    },
  },
};
</script>
