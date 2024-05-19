<script setup lang="ts">
const checkbox = ref(['c']);
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Checkbox:</h2>
    <div class="mt-12 flex flex-col justify-center gap-8">
      <ACheckbox
        v-model="checkbox"
        value="a"
        size="sm"
        label="Checkbox - small"
        label-classes="font-bold text-sm text-gray-900 dark:text-gray-100"
      />
      <ACheckbox
        v-model="checkbox"
        value="b"
        label="Checkbox - medium"
        label-classes="font-bold text-gray-900 dark:text-gray-100"
      />
      <ACheckbox
        v-model="checkbox"
        value="c"
        size="lg"
        label="Checkbox - large"
        label-classes="font-bold text-sm text-gray-900 dark:text-gray-100"
      />
      <ACheckbox
        v-model="checkbox"
        value="c"
        size="lg"
        disabled
        label="Checkbox - disabled"
        label-classes="text-sm text-gray-900 dark:text-gray-100"
      />
      <ACheckbox v-model="checkbox" size="lg" value="d" class="!items-start">
        <div class="">
          <p class="text-xl text-gray-900 dark:text-gray-100">Custom label slot</p>
          <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
        </div>
      </ACheckbox>
    </div>
  </div>
</template>
