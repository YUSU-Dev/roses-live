<template>
  <a
    :href="href"
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
  },
};
</script>
