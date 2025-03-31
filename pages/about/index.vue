<template>
  <div>
    <HeroBanner
      title="ABOUT"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_About.webp"
    />
    <div class="container mx-auto py-28">
      <div class="flex flex-col gap-6 pb-28">
        <h2 class="text-5xl xcond font-bold">THE BATTLE IS COMING HOME</h2>
        <div class="flex flex-col gap-4">
          <p>
            Roses is an annual sporting varsity between the University of York
            and Lancaster University. But it wasn’t always a sports contest. It
            began way back in medieval times as a war for the throne of England,
            between the Houses of York and Lancaster. When that war was fought
            and won, a new one began... Now, our battlefield is the playing
            field, fought between the University of York and Lancaster
            University. Each This year, we take turns to host this epic battle
            and 2025 is our turn. Wwe’ll be hosting hundreds of fixtures between
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
        </div>
      </div>
      <div class="flex flex-col gap-6 pb-28">
        <h2 class="text-5xl xcond font-bold">SHOW US HOW YOU’RE CELEBRATING</h2>
        <div class="flex flex-col gap-4">
          <p>
            We want to hear from you throughout the weekend. Whether you’re
            celebrating a win, cheering on Team York from the sidelines, or
            enjoying a well-earned pizza at Courtyard, let us know!
          </p>
          <p>
            Tag
            <a
              href="https://instagram.com/yorkunisu"
              target="_blank"
              class="text-roses-red hover:underline"
              >@yorkunisu</a
            >
            in your Instagram posts and we’ll reshare some of our favourite
            moments throughout Roses.
          </p>
          <p>
            Plus, give us a follow for all the important updates across the
            weekend.
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <h2 class="text-5xl xcond font-bold">SUSTAINABILITY AT ROSES</h2>
        <div class="flex flex-col gap-4">
          <p>
            Roses gets bigger every year - but we don’t want that to have a
            negative impact on its sustainability! So we are implementing lots
            of measures to keep our carbon footprint as low as possible. None of
            our vendors will be selling beef in line with our participation in
            the Sustainable SUs charter. This year also sees the return of the
            reusable Roses Cup: when you purchase a drink at any Roses outlet,
            you’ll be asked to pay a £2 deposit for a cup which you can reuse
            throughout the weekend. When you’re done, return your cup to get
            your deposit back..
          </p>
          <p>
            Don’t worry, merch isn’t exempt from our sustainability work either.
            This year, all of our Roses merchandise will be made from
            <a
              href="https://issuu.com/roupez.se/docs/tiger_cotton_presentation#:~:text=Tiger%20Cotton%C2%AE%20has%20been,Now%20it's%20finally%20here!&text=Tiger%20Cotton%20works%20to%20convert,scenario%20for%20farmers%20and%20wildlife.%E2%80%9D"
              target="_blank"
              class="text-roses-red hover:underline"
              >tiger cotton</a
            >, a growing scheme which makes it financially viable for farmers to
            transition to Organic Cotton growing. Stay tuned for more
            sustainability updates!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from "~/components/HeroBanner.vue";
export default {
  components: {
    HeroBanner,
  },
};
useHead({
  title: "About",
});
</script>
