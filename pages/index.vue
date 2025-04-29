<template>
  <div>
    <HeroBanner
      title="ROSES LIVE"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Homepage.png"
      sub-image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_banner_NEW_cropped.png"
      button-title="Fixtures"
      button-href="/fixtures"
    />
    <div class="body">
      <div class="container mx-auto py-14 md:py-28">
        <div class="pb-14 md:pb-28">
          <LiveScore />
        </div>
        <LiveReporting />
      </div>
      <CtaTiles />
      <div class="py-14 md:py-28">
        <TextImageSection
          image="https://assets-cdn.sums.su/YU/website/img/Roses/York_Mind_Image.jpg"
          alt=""
          title="Our Charity Partner"
          sub-title="ROSES IN MIND"
          button-title="Donate Now"
          button-href="https://go.yorksu.org/UxA3oQP"
          button-target="_blank"
        >
          <template #text>
            <p>
              Each year, we partner with a different charity. Across Roses
              weekend, we raise awareness and money for the charity,
              highlighting important causes. This year, we are partnering with
              <a
                class="text-roses-red hover:underline"
                href="https://go.yorksu.org/TjTnAgh"
                target="_blank"
                >York Mind</a
              >.
            </p>
            <p>
              York Mind are an independent local mental health charity which
              empowers individuals experiencing mental ill health to start on
              the pathway to recovery, supported by one simple belief: the
              condition should never define the person.
            </p>
            <p>
              To mark the announcement, our Sports Officer, TJ, shared her story
              of how sport helped her to overcome her own mental health
              challenges.
              <a
                class="text-roses-red hover:underline"
                href="https://go.yorksu.org/jeuA8pb"
                target="_blank"
                >Read TJ’s story: Sport and my mental health</a
              >.
            </p>
          </template>
        </TextImageSection>
      </div>
    </div>
    <cookie-consent />
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import LiveScore from "~/components/LiveScore.vue";
import LiveReporting from "~/components/LiveReporting.vue";
import CtaTiles from "~/components/CtaTiles.vue";
import CookieConsent from "~/components/cookieConsent.vue";
export default {
  components: {
    HeroBanner,
    LiveScore,
    LiveReporting,
    CtaTiles,
    CookieConsent,
  },
};
useHead({
  title: "Roses Live",
  meta: [
    {
      name: "description",
      content:
        "Roses is an annual sporting varsity between the University of York and Lancaster University. Roses 2025 marks the 60th anniversary of the competition! #RosesAreWhite",
    },
  ],
});
</script>
