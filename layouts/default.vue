<script setup lang="ts">
import SponsorsBanner from ".././components/SponsorsBanner.vue";
</script>
<template>
  <div class="flex flex-col h-full">
    <Navbar />
    <div class="">
      <slot />
    </div>
    <div class="flex flex-col flex-grow justify-end items-end">
      <SponsorsBanner />
      <Footer />
    </div>
  </div>
</template>
