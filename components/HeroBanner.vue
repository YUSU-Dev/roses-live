<template>
  <div
    class="w-full bg-cover flex items-center min-h-[250px] md:h-[500px] bg-black"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container mx-auto flex justify-between h-full py-10">
      <div class="flex flex-col lg:max-w-[40%] gap-6 text-white justify-center">
        <p class="text-lg hidden lg:block">{{ subTitle }}</p>
        <h1 class="text-7xl lg:text-8xl font-bold xcond italic">{{ title }}</h1>
        <div>
          <RosesButton
            v-if="buttonHref && buttonTitle"
            :href="buttonHref"
            :title="buttonTitle"
          />
        </div>
      </div>
      <div v-if="subImage" class="hidden lg:flex items-end">
        <NuxtImg
          :src="subImage"
          alt=""
          loading="lazy"
          width="600px"
          height="fit-content"
        />
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
