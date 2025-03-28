<script>
export default {
  name: "RosesOgTemplate",
  props: {
    title: {
      type: String,
      default: "title",
    },
    description: {
      type: String,
      default: "description",
    },
  },
  computed: {
    slicedTitle: function () {
      return this.title.slice(0, 60);
    },
  },
};
</script>
<template>
  <div class="w-full h-full flex flex-col justify-center">
    <div class="absolute top-0 left-0 w-full h-full">
      <img
        src="/img/seo-template.png"
        alt="Background Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex flex-col justify-center items-center h-full">
      <h1
        class="m-0 text-[75px] font-semibold mb-4 text-white flex items-center"
      >
        <span>{{ slicedTitle }}</span>
      </h1>
    </div>
  </div>
</template>
