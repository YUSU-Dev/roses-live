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
      >
        <template #text>
          <p>
            Roses is an annual sporting varsity between the University of York
            and Lancaster University. But it wasn’t always a sports contest. It
            began way back in medieval times as a war for the throne of England,
            between the Houses of York and Lancaster. When that war was fought
            and won, a new one began... Now, our battlefield is the playing
            field, fought between the University of York and Lancaster
            University. Each year, we take turns to host this epic battle and
            2025 is our turn. We’ll be hosting hundreds of fixtures between
            Friday 2 and Sunday 4 May, from American Football and Cheerleading
            to Debating and Octopush!
          </p>
          <p>
            But it won’t just be sports fixtures; across the weekend, there will
            be a range of events to attend across campus and in our venues. So
            if you aren’t a massive sports fan, you can still get involved in
            the Roses buzz! This year is the 60th anniversary of the
            competition, so it’s a special one for everyone!
          </p>
          <h3 class="text-5xl xcond font-bold py-6">
            Show us how you’re celebrating
          </h3>
          <p>
            We want to hear from you throughout the weekend. Whether you’re
            celebrating a win, cheering on Team York from the sidelines, or
            enjoying a well-earned pizza at Courtyard, let us know!
          </p>
          <p>
            Tag @yorkunisu in your Instagram posts and we’ll reshare some of our
            favourite moments throughout Roses.
          </p>
          <p>
            Plus, give us a follow for all the important updates across the
            weekend.
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
        image="https://assets-cdn.sums.su/YU/website/img/Roses/York_Mind_Image.jpg"
        alt=""
        title="Our Charity Partner"
        sub-title="ROSES IN MIND"
        button-title="York Mind"
        button-href="/"
      >
        <template #text>
          <p>
            Each year, we partner with a different charity. Across Roses
            weekend, we raise awareness and money for the charity, highlighting
            important causes. This year, we are partnering with
            <a
              class="text-roses-red hover:underline"
              href="https://www.yorkmind.org.uk/"
              target="_blank"
              >York Mind</a
            >.
          </p>
          <p>
            York Mind are an independent local mental health charity which
            empowers individuals experiencing mental ill health to start on the
            pathway to recovery, supported by one simple belief: the condition
            should never define the person.
          </p>
          <p>
            To mark the announcement, our Sports Officer, TJ, shared her story
            of how sport helped her to overcome her own mental health
            challenges.
            <a
              class="text-roses-red hover:underline"
              href="https://yorksu.org/news/article/sport-mental-health"
              target="_blank"
              >Read TJ’s story: Sport and my mental health</a
            >.
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
