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
    <div class="pt-28">
      <TextImageSection
        image="https://assets-cdn.sums.su/YU/website/img/Roses/About_Image_Homepage.png"
        alt=""
        title="About"
        sub-title="ONE TEAM ONE YORK"
        button-title="Read More"
        button-href="/about"
      >
        <template #text>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            cum tenetur, non quod ex nesciunt a asperiores labore at aperiam
            sunt, accusantium consectetur? Iusto placeat delectus cum inventore
            nostrum enim?
          </p>
        </template>
      </TextImageSection>
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
    <div class="py-28">
      <TextImageSection
        image="https://assets-cdn.sums.su/YU/website/img/Roses/About_Image_Homepage.png"
        alt=""
        title="Our Charity Partner"
        sub-title="ROSES IN MIND"
        button-title="York Mind"
        button-href="/"
      >
        <template #text>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            cum tenetur, non quod ex nesciunt a asperiores labore at aperiam
            sunt, accusantium consectetur? Iusto placeat delectus cum inventore
            nostrum enim?
          </p>
        </template>
      </TextImageSection>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import RosesCountdown from "~/components/Countdown.vue";
import CtaTiles from "~/components/CtaTiles.vue";
import TextImageSection from "~/components/TextImageSection.vue";
export default {
  name: "IndexPage",
  components: {
    HeroBanner,
    CtaTiles,
    RosesCountdown,
    TextImageSection,
  },
};
</script>
