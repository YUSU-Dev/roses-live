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
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
export default {
  name: "IndexPage",
  components: {
    HeroBanner,
  },
};
</script>
