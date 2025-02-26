<template>
  <div class="flex flex-wrap justify-center items-center h-full">
    <div class="max-w-[500px] max-h-[500px]">
      <img
        src="https://assets-cdn.sums.su/YU/website/img/Roses/500x500_Roses_Holding_Page.webp"
        class="aspect-square w-full object-contain"
        alt="Roses 2025 logo"
      />
    </div>
    <div class="flex flex-col gap-y-8 text-center">
      <!-- <h1 class="text-5xl xxs:text-6xl sm:text-8xl">#RosesAreWhite</h1> -->
      <RosesCountdown date="2025-05-02T20:00:00" />
      <div class="flex justify-center">
        <SocialLinks />
      </div>
      <div class="flex justify-center items-center gap-6 h-20">
        <a href="https://yorksu.org/"
          ><img
            src="https://assets-cdn.sums.su/YU/website/img/yorksu-logo-black-full.png"
            alt="University of York Students' Union"
            class="w-40"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import RosesCountdown from "./Countdown.vue";
import SocialLinks from "./Socials.vue";

export default {
  name: "HoldingPage",
  components: {
    RosesCountdown,
    SocialLinks,
  },
};
</script>
