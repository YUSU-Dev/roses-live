<template>
  <div>
    <HeroBanner
      title="GET INVOLVED"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_Get_Involved.webp"
    />
    <div class="body">
      <div class="container mx-auto py-28">
        <div class="flex flex-col gap-6 pb-28">
          <h2 class="text-5xl xcond font-bold">LET’S RUN TO ROSES!</h2>
          <div class="flex flex-col gap-4">
            <p>
              This year, Roses is back on home soil celebrating its 60th
              Anniversary - and we are inviting everyone to be a part of that
              journey. To celebrate this milestone, the Run to Roses 60km
              Challenge is officially live. We challenge you to move, walk or
              run 60km, all the way to Roses weekend. If you haven’t started
              yet, it’s not too late to join in - and it’s not just for
              pro-exercisers, it’s for everyone. However you move your 60km,
              we’d love to see you involved in our journey to Roses.
            </p>
            <p>
              Move for your mental health, your physical health, or just to get
              outside. Head to our
              <a
                href="https://yorksu.org/sport/run-to-roses?utm_source=yorksu&utm_medium=roses-live-website&utm_campaign=roses2025"
                target="_blank"
                class="text-roses-red hover:underline"
                >Run to Roses page</a
              >
              for information on the Strava Run Club, and follow
              <a
                href="https://instagram.com/yorksportunion"
                target="_blank"
                class="text-roses-red hover:underline"
                >@yorksportunion</a
              >
              on Instagram to stay up to date with the Challenge events,
              competitions, ambassadors, and lots more!
            </p>
          </div>
          <img
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Run_to_Roses_image.png"
            class="w-full"
            alt="Run to Roses"
          />
        </div>
        <div class="flex flex-col gap-6 pb-28">
          <h2 class="text-5xl xcond font-bold">ROSES EVENTS</h2>
          <div class="flex flex-col gap-4">
            <p>
              Alongside our 100+ competitive fixtures, we also have a selection
              of events over Roses weekend. Join us for the
              <a
                href="https://yorksu.org/events/id/4394-roses-2025-opening-ceremony-mens-1s-basketball"
                target="_blank"
                class="text-roses-red hover:underline"
                >Opening Ceremony</a
              >, which kicks off Roses Weekend with Mens' 1s Basketball and
              amazing performances from student groups! Or maybe you want to
              dress up in your finest for an evening of excitement? Join us for
              <a
                href="https://yorksu.org/events/id/4395-roses-2025-fight-night"
                target="_blank"
                class="text-roses-red hover:underline"
                >Fight Night</a
              >!
            </p>
            <p>
              Unwind with some crafts at The Happy Place under James Marquee,
              watch show-stopping performances at The Roses Fringe Festival, or
              take the stage at our Karaoke Night and Open Mic nights!
            </p>
            <div class="flex mt-4">
              <RosesButton
                title="Roses Events"
                href="https://yorksu.org/events?category=37"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">ART COMPETITION</h2>
          <div class="flex flex-col gap-4">
            <p>
              Our very own
              <a
                href="https://www.instagram.com/uoyartsociety"
                target="_blank"
                class="text-roses-red hover:underline"
                >Art Society</a
              >
              and UNA Lancaster (Up North Arts, Lancaster’s Art Society) are
              holding an art competition on the theme of adrenaline, movement,
              and unity. The winning pieces will be showcased on 2 May in the
              <a
                href="https://www.instagram.com/normanreagallery/"
                target="_blank"
                class="text-roses-red hover:underline"
                >Norman Rea Art Gallery</a
              >
              for you to take a look at in between fixtures and events.
            </p>
          </div>
          <img
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Roses_Art_Competition_Image.png"
            class="w-full"
            alt="Roses Art Competition"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
import RosesButton from "~/components/button.vue";
export default {
  components: {
    HeroBanner,
    RosesButton,
  },
};
useHead({
  title: "Get Involved",
});
</script>
