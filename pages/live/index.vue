<template>
  <div>
    <HeroBanner
      title="ROSES LIVE"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Homepage.png"
      sub-image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_banner_NEW_cropped.png"
    />
    <div class="body">
      <div class="container mx-auto py-28">
        <div class="pb-28">
          <LiveScore />
        </div>
        <LiveReporting />
      </div>
      <CtaTiles />
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import LiveScore from "~/components/LiveScore.vue";
import LiveReporting from "~/components/LiveReporting.vue";
import CtaTiles from "~/components/CtaTiles.vue";
export default {
  components: {
    HeroBanner,
    LiveScore,
    LiveReporting,
    CtaTiles,
  },
};
useHead({
  title: "Roses Live",
});
</script>
