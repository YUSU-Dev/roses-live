<template>
  <a
    :href="href"
    :target="target"
    class="bg-roses-red text-white px-6 lg:px-10 py-2 rounded-full text-center"
    >{{ title }}</a
  >
</template>

<script>
export default {
  name: "RosesButton",
  props: {
    title: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
};
</script>
