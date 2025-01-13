<template>
  <a
    :href="href"
    class="bg-roses-red text-white px-10 py-2 rounded-full w-min"
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
