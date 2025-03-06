<template>
  <div
    class="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row fixtureTile animate-pulse"
  >
    <div class="fixtureTime">
      <div
        class="w-15 h-5 flex lg:justify-center items-center bg-gray-200 rounded"
      ></div>
    </div>
    <div class="flex flex-col gap-2 flex-grow fixtureDetails">
      <div class="flex flex-wrap gap-2">
        <div class="w-50 h-4 lg:h-6 bg-gray-200 rounded"></div>
        <div class="w-40 h-4 lg:h-6 bg-gray-200 rounded"></div>
      </div>
      <div class="flex justify-between">
        <div class="w-60 h-2 lg:h-4 bg-gray-200 rounded"></div>
        <div class="block lg:hidden w-20 h-2 lg:h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
    <div class="flex flex-col gap-2 lg:pr-24 lg:pl-16">
      <div
        class="flex items-center justify-start sm:justify-end gap-6 sm:gap-8"
      >
        <div class="flex gap-4 items-center">
          <div class="h-4 lg:h-6 w-20 lg:w-30 bg-gray-200 rounded"></div>
          <div class="w-9 h-9 bg-gray-200 rounded"></div>
        </div>
        <div class="flex gap-4 items-center">
          <div class="h-4 lg:h-6 w-20 lg:w-30 bg-gray-200 rounded"></div>
          <div class="w-9 h-9 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-end">
        <div class="w-10 h-2 lg:h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingFixtureTile",
};
</script>
