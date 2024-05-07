<script setup lang="ts">
const radio = ref('c');
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Radio Input:</h2>
    <div class="mt-12 flex items-center justify-center gap-8">
      <AtomsRadio
        v-model="radio"
        value="a"
        size="sm"
        label="Radio input - small"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
      <AtomsRadio
        v-model="radio"
        value="b"
        size="md"
        label="Radio input - medium"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
      <AtomsRadio
        v-model="radio"
        value="c"
        size="lg"
        label="Radio input - large"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
      <AtomsRadio
        v-model="radio"
        value="b"
        size="md"
        disabled
        label="Radio input - disabled"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
    </div>
    <div class="mt-8 flex items-center justify-center">
      <AtomsRadio v-model="radio" value="d" class="mx-auto">
        <div>
          <p class="text-xl text-gray-900 dark:text-gray-100">Label with Title and Description</p>
          <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </AtomsRadio>
    </div>
  </div>
</template>
