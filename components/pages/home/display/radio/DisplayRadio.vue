<script setup lang="ts">
const radio = ref('c');
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Radio Input:</h2>
    <div class="mt-12 flex flex-col items-start gap-8">
      <ARadio
        v-model="radio"
        value="a"
        size="sm"
        label="Radio input - small"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
      <ARadio
        v-model="radio"
        value="b"
        size="md"
        label="Radio input - medium"
        label-classes="text-gray-900 dark:text-gray-100"
      />
      <ARadio
        v-model="radio"
        value="c"
        size="lg"
        label="Radio input - large"
        label-classes="text-lg text-gray-900 dark:text-gray-100"
      />
      <ARadio
        v-model="radio"
        value="c"
        size="lg"
        disabled
        label="Radio input - disabled"
        label-classes="text-lg text-gray-900 dark:text-gray-100"
      />
      <ARadio v-model="radio" value="d" size="lg" class="!items-start">
        <div>
          <p class="text-xl text-gray-900 dark:text-gray-100">Custom label slot</p>
          <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </ARadio>
    </div>
  </div>
</template>
