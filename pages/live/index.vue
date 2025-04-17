<template>
  <div>
    <HeroBanner
      title="ROSES LIVE"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Roses_Live.png"
    />
    <div class="body">
      <div class="container mx-auto py-28">
        <LiveScore />
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import LiveScore from "~/components/LiveScore.vue";
export default {
  components: {
    HeroBanner,
    LiveScore,
  },
};
useHead({
  title: "Roses Live",
});
</script>
