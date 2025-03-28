<script>
import HeroBanner from "/components/HeroBanner.vue";
import RosesButton from "/components/button.vue";
export default {
  name: "ErrorPage",
  components: {
    HeroBanner,
    RosesButton,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-col h-full">
    <Navbar />
    <div class="">
      <HeroBanner
        :title="'Error - ' + error.statusCode"
        image="https://assets-cdn.sums.su/YU/website/img/Roses/Hero_Banner_About.webp"
      />
      <div class="container mx-auto py-28">
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl xcond font-bold">
            Oops! Something went wrong...
          </h2>
          <div>
            <RosesButton
              title="Go back to homepage"
              href="/"
              target="_self"
              class="mt-6"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-grow justify-end items-end">
      <Footer />
    </div>
  </div>
</template>
