<template>
  <div class="w-full bg-roses-dark py-10 footer">
    <div class="container mx-auto flex flex-col gap-12">
      <div class="flex flex-col lg:flex-row justify-between items-start">
        <div class="order-2 lg:order-1">
          <img
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Roses_are_white_footer.png"
            alt=""
          />
        </div>
        <div
          class="flex mb-10 lg:mb-0 text-white text-xs lg:text-sm gap-10 order-1 lg:order-2"
        >
          <div class="flex flex-col gap-2 lg:gap-1">
            <h2 class="text-roses-red mb-2">Useful Links</h2>
           <!-- <a>Roses Live</a>
            <a>Fixtures</a> -->
            <a>Get Involved</a>
            <a>About</a>
            <a>Food & Drink</a>
            <a>Shop</a>
            <a>Map</a>
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2 lg:gap-1">
              <h2 class="text-roses-red mb-2">Student Media</h2>
              <a>Nouse</a>
              <a>YSTV</a>
              <a>URY</a>
            </div>
            <div class="flex flex-col gap-2 lg:gap-1">
              <h2 class="text-roses-red mb-2">Contact Details</h2>
              <a>Phone: 01904 32 3724</a>
              <a href="mailto:helpdesk@yorksu.org"
                >Email: helpdesk@yorksu.org</a
              >
            </div>
          </div>
        </div>
        <div class="flex w-56 items-center pt-6 order-3">
          <a href="https://yorksu.org/" target="_blank">
            <img
              src="https://assets-cdn.sums.su/YU/website/img/yorksu-logo-white-full.png"
              class="w-full h-fit"
              alt="University of York Students' Union"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row text-white justify-between gap-6">
        <div class="flex items-center order-2 lg:order-1">
          <p class="mb-0 text-xs lg:text-sm">
            © University of York Students' Union 2025 | All rights reserved
          </p>
        </div>
        <div class="flex gap-2 items-center order-1 lg:order-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from "./Socials.vue";
export default {
  name: "FooterBar",
  components: {
    SocialLinks,
  },
};
</script>
