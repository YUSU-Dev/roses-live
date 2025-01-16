<script setup lang="ts">
import SponsorsBanner from "./components/SponsorsBanner.vue";
</script>

<template>
  <div class="flex flex-col h-full">
    <Head>
      <Title>Roses Live</Title>
      <Meta
        name="description"
        content="Roses 2025 will be returning to York! #RosesAreWhite"
      />
    </Head>
    <Navbar />
    <div class="">
      <NuxtPage />
    </div>
    <div class="flex flex-col flex-grow justify-end items-end">
      <SponsorsBanner />
      <Footer />
    </div>
  </div>
</template>
