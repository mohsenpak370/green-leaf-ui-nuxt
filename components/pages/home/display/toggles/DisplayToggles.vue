<script setup lang="ts">
const toggleOn = ref(false);
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Toggles:</h2>
    <div class="mt-12 flex items-center flex-wrap gap-8">
      <AtomsToggle v-model="toggleOn" />
      <AtomsToggle v-model="toggleOn" dynamic-radius />
      <AtomsToggle v-model="toggleOn" dynamic-radius outward />
      <AtomsToggle v-model="toggleOn" outward />
    </div>
  </div>
</template>
