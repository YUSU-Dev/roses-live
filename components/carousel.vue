<template>
  <div v-if="banners.length > 0" class="">
    <h2 class="text-4xl font-bold text-roses-red mb-4">FIXTURE PHOTOS</h2>

    <div class="flex justify-center overflow-x-hidden bg-roses-red">
      <div class="max:banner-container max:max-w-screen-2xl w-full">
        <transition-group
          :name="transition"
          tag="div"
          class="relative flex h-[400px] justify-center"
        >
          <div v-for="i in [currentIndex]" :key="i" class="absolute">
            <div v-if="banners.length > 0 && banners[currentIndex]">
              <NuxtImg
                provider="cloudflare"
                :src="banners[currentIndex].fileName"
                :alt="banners[currentIndex].altText"
                class="h-[400px] object-cover"
                height="400"
              />
              <p
                v-if="banners[currentIndex].caption"
                class="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 text-lg"
              >
                {{ banners[currentIndex].caption }}
              </p>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="bg-[#f7f7f7]">
      <div class="banner-container mx-auto h-10">
        <div v-if="banners.length > 1" class="flex justify-center gap-x-4 py-2">
          <button
            aria-label="Previous slide"
            class="hover:cursor-pointer"
            @click="prev()"
          >
            <ArrowLeft />
          </button>
          <button
            v-if="playing"
            aria-label="Stop slide"
            class="hover:cursor-pointer"
            @click="stopSlide()"
          >
            <PauseIcon />
          </button>
          <button
            v-else
            aria-label="Start Slide"
            class="hover:cursor-pointer"
            @click="startSlide()"
          >
            <PlayIcon />
          </button>
          <button
            aria-label="Next slide"
            class="hover:cursor-pointer"
            @click="next()"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ArrowLeft, ArrowRight, PauseIcon, PlayIcon } from "lucide-vue-next";

export default {
  name: "RosesCarousel",
  components: {
    ArrowLeft,
    ArrowRight,
    PauseIcon,
    PlayIcon,
  },
  props: {
    interval: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
      transition: "slide-next",
      playing: true,
      banners: [],
    };
  },
  async created() {
    await this.getBanners();
  },
  async mounted() {
    this.startSlide();
  },
  updated() {},
  methods: {
    getBanners: async function () {
      const sportName = this.$route.params.id;

      const response = await $fetch(
        `https://media-dashboard.yorksu.org/api/cm5pio57y0000vt6y0l5p92f4/seasons/cm9tx5ab10001o9011ugbylm7/photos?sport=${sportName}`,
      );
      this.banners = response.data;
    },
    startSlide: function () {
      this.timer = setInterval(this.next, this.interval);
      this.playing = true;
    },
    stopSlide: function () {
      clearInterval(this.timer);
      this.playing = false;
    },
    next: function () {
      this.transition = "slide-next";
      this.stopSlide();
      if (this.currentIndex === this.banners.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
      this.startSlide();
    },
    prev: function () {
      this.transition = "slide-prev";
      this.stopSlide();
      if (this.currentIndex === 0) {
        this.currentIndex = this.banners.length - 1;
      } else {
        this.currentIndex -= 1;
      }
      this.startSlide();
    },
  },
};
</script>
