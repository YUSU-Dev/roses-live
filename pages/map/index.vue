<template>
  <div>
    <HeroBanner
      title="ROSES MAP"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Food_Drink.png"
    />
    <div class="body">
      <div class="container mx-auto py-28">
        <RosesMap />
      </div>
    </div>
  </div>
</template>

<script>
import RosesMap from "~/components/RosesMap.vue";
import HeroBanner from "~/components/HeroBanner.vue";
export default {
  components: {
    RosesMap,
    HeroBanner,
  },
};
</script>
