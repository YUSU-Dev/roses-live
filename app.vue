<script setup lang="ts">
import SponsorsBanner from "./components/SponsorsBanner.vue";
import Clarity from "@microsoft/clarity";

const clarityProjectId = "gg887k8q4u";

Clarity.init(clarityProjectId);
defineOgImageComponent("RosesOgTemplate");
</script>

<template>
  <div class="flex flex-col h-full">
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
