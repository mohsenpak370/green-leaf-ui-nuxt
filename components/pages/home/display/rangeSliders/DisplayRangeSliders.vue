<script setup lang="ts">
const value = ref(50);
const minValue = ref(10);
const maxValue = ref(90);
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Range Sliders:</h2>
    <div class="mt-12 grid lg:grid-cols-2 items-center flex-wrap gap-16">
      <ARangeSlider v-model="value" class="dark:text-gray-200" />
      <ARangeSlider
        v-model="value"
        class="dark:text-gray-200"
        hide-values
        hide-min-max
        hide-value
        thickness="4"
        dynamic-radius
      />
      <ARangeSlider
        v-model="value"
        class="dark:text-gray-200"
        thickness="5"
        handle-size="1"
        value-balloon-class="absolute top-8 p-1 text-xs rounded-full border bg-light-accent dark:bg-dark-accent shadow"
      />
      <ARangeSlider v-model="value" class="dark:text-gray-200" handle-size="5" thickness="1" hide-min-max />
      <ADualRangeSlider
        v-model:min-value="minValue"
        v-model:max-value="maxValue"
        hide-values
        hide-min-max
        class="dark:text-gray-200"
      />
      <ADualRangeSlider
        v-model:min-value="minValue"
        v-model:max-value="maxValue"
        class="dark:text-gray-200"
        handle-size="5"
        dynamic-radius
        step="10"
      />
      <ADualRangeSlider
        v-model:min-value="minValue"
        v-model:max-value="maxValue"
        thickness="4"
        handle-size="4"
        value-balloon-class="absolute bottom-9 p-1 text-xs rounded-1 border bg-light-accent dark:bg-dark-accent shadow"
        min-max-class="text-sm font-semibold "
        class="dark:text-gray-200"
      />
      <ADualRangeSlider
        v-model:min-value="minValue"
        v-model:max-value="maxValue"
        thickness="1"
        handle-size="1"
        class="dark:text-gray-200"
        disabled
      />
    </div>
  </div>
</template>
