<script setup lang="ts">
import Clarity from "@microsoft/clarity";

const clarityProjectId = "gg887k8q4u";

Clarity.init(clarityProjectId);
defineOgImage("RosesOgTemplate");
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
