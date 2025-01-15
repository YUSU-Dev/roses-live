<template>
  <div
    class="w-full bg-cover h-[500px]"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container mx-auto flex justify-between h-full">
      <div class="flex flex-col lg:max-w-[40%] gap-6 text-white justify-center">
        <p class="text-lg hidden lg:block">{{ subTitle }}</p>
        <h1 class="text-7xl lg:text-8xl font-bold xcond italic">{{ title }}</h1>
        <RosesButton
          v-if="buttonHref && buttonTitle"
          :href="buttonHref"
          :title="buttonTitle"
        />
      </div>
      <div v-if="subImage" class="hidden lg:flex">
        <img :src="subImage" class="object-cover w-full h-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import RosesButton from "./button.vue";
export default {
  name: "HeroBanner",
  components: {
    RosesButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    subImage: {
      type: String,
      default: "",
    },
    buttonTitle: {
      type: String,
      default: "",
    },
    buttonHref: {
      type: String,
      default: "",
    },
  },
};
</script>
