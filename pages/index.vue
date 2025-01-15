<template>
  <div>
    <HeroBanner
      title="THE BATTLE IS COMING HOME"
      sub-title="Roses 2025"
      button-title="Fixtures"
      button-href="/fixtures"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Homepage.png"
      sub-image="https://assets-cdn.sums.su/YU/website/img/Roses/One_Team_One_York_Homepage.png"
    />
    <div class="container mx-auto">
      <div class="flex flex-col text-4xl py-10">Test index</div>
    </div>
    <div class="flex flex-col items-center justify-center gap-14 py-28">
      <div class="container mx-auto">
        <h2 class="font-bold xcond text-5xl text-center">
          COUNTDOWN TO ROSES 2025
        </h2>
      </div>
      <RosesCountdown date="2025-05-02T20:00:00" />
    </div>
    <CtaTiles />
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import RosesCountdown from "~/components/Countdown.vue";
import CtaTiles from "~/components/CtaTiles.vue";
export default {
  name: "IndexPage",
  components: {
    HeroBanner,
    CtaTiles,
    RosesCountdown,
  },
};
</script>
