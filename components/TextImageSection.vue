<template>
  <div
    class="container mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-0"
  >
    <div
      class="min-w-[50%] flex justify-center lg:justify-end lg:pr-20 order-2 lg:order-1"
    >
      <NuxtImg class="h-fit" :src="image" :alt="alt" loading="lazy" />
    </div>
    <div
      class="flex flex-col gap-6 order-1 lg:order-2 items-center text-center lg:items-start lg:text-start"
    >
      <div class="flex flex-col gap-4">
        <h2 v-if="title" class="text-roses-red font-semibold">{{ title }}</h2>
        <h3 v-if="subTitle" class="text-5xl xcond font-bold">{{ subTitle }}</h3>
      </div>
      <div class="flex flex-col gap-2">
        <slot name="text">{{ text }}</slot>
      </div>
      <RosesButton
        v-if="buttonTitle && buttonHref"
        :title="buttonTitle"
        :href="buttonHref"
        :target="buttonTarget"
      />
    </div>
  </div>
</template>

<script>
import RosesButton from "./button.vue";
export default {
  name: "TextImageSection",
  components: {
    RosesButton,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
    buttonHref: {
      type: String,
      required: true,
    },
    buttonTarget: {
      type: String,
      default: "_self",
    },
  },
};
</script>
