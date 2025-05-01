<script setup>
import { onMounted } from "vue";
definePageMeta({
  layout: false,
});

const scores = ref([]);

async function fetchScores() {
  const response = await $fetch(
    "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures/results?pageSize=4",
  );
  scores.value = response.data;
}
onMounted(() => {
  fetchScores();
});
</script>
<template>
  <div class="h-full bg-light-gray">
    <div class="container w-full mx-auto flex h-full py-4 items-center gap-20">
      <div
        class="flex flex-col gap-28 justify-center flex-grow border-r-4 border-black h-3/4 pr-20"
      >
        <live-score />
        <div class="flex gap-28 items-center justify-center w-full h-fit">
          <NuxtImg
            src="https://assets-cdn.sums.su/YU/website/img/Roses/Roses_mark_Navigation.png"
            class="w-50 h-50 aspect-square"
            alt="Roses Live"
          />
          <NuxtImg
            src="https://assets-cdn.sums.su/YU/website/img/yorksu-logo-black-full.png"
            class="w-auto h-9/10"
            alt="University of York Students' Union"
            loading="lazy"
          />
        </div>
      </div>
      <div class="flex h-full flex-col justify-center">
        <h2 class="text-5xl xcond font-bold text-center">Latest Results</h2>
        <div
          v-for="(score, index) in scores"
          :key="index"
          class="justify-center flex"
        >
          <live-reporting-result-tile :coverage="score" />
        </div>
      </div>
    </div>
  </div>
</template>
