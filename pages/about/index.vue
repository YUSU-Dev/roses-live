<template>
  <div>
    <HeroBanner
      title="ABOUT"
      image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_About.webp"
    />
    <div class="container mx-auto py-28">
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
  title: "About | Roses Live",
});
</script>
