<template>
  <div class="flex flex-col gap-6 lg:flex-row">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
      <RosesButton title="Before" />
      <RosesButton title="Friday" />
      <RosesButton title="Saturday" />
      <RosesButton title="Sunday" />
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-6">
      <RosesButton title="Sports" />
    </div>
  </div>
</template>

<script>
import RosesButton from "~/components/button.vue";
export default {
  name: "DayFilters",
  components: {
    RosesButton,
  },
};
</script>
