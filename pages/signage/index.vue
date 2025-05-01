<script setup>
import { onMounted } from "vue";
definePageMeta({
  layout: false,
});

const scores = ref([]);

async function fetchScores() {
  const response = await $fetch(
    "https://sports-admin.yorksu.org/api/clst1o9lv0001q5teb61pqfyy/seasons/cm7uo6y6a0005nn0153286r5l/fixtures/results?pageSize=3",
  );
  scores.value = response.data;
}
onMounted(() => {
  fetchScores();
});
</script>
<template>
  <div class="flex flex-col h-full py-4">
    <div class="container mx-auto flex flex-col">
      <div>
        <live-score />
      </div>
      <div>
        <h2 class="text-2xl font-bold text-center">Latest Results</h2>
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
