<script setup lang="ts">
const toggleOn = ref(true);
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Toggles:</h2>
    <div class="mt-12 flex items-center flex-wrap gap-8">
      <AToggle v-model="toggleOn" />
      <AToggle v-model="toggleOn" dynamic-radius />
      <AToggle v-model="toggleOn" dynamic-radius outward />
      <AToggle v-model="toggleOn" outward />
    </div>
  </div>
</template>
