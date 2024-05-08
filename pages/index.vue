<script setup lang="ts">
const loading = ref(false);
const radio = ref('c');
const checkbox = ref(['c']);
</script>

<template>
  <div class="container">
    <div
      class="mt-16 p-8 md:p-16 bg-light-accent dark:bg-dark-accent rounded-2 flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-8"
    >
      <div>
        <p class="text-xl text-gray-900 dark:text-gray-100 text-center">
          {{ $t('welcomeText') }}
        </p>
        <p class="mt-8 text-xl text-gray-900 dark:text-gray-100 text-center">
          {{ $t('introduction') }}
        </p>
      </div>
      <div class="h-[16rem] w-full">
        <IconGreenLeaf class="mx-auto text-[16rem]" filled />
      </div>
    </div>
    <PagesHomeDisplayButtons />
    <PagesHomeDisplayRadio />
    <PagesHomeDisplayCheckbox />
    <div class="my-4 flex items-center justify-center">
      <AtomsInput
        v-model="radio"
        class="focus-within:border-primary w-96"
        placeholder="Input Placeholder"
        type="password"
      >
        <template #prepend>
          <IconMoon class="text-[2rem] text-gray-200" />
        </template>
        <template #append>
          <IconSun class="text-3xl text-gray-200" />
        </template>
      </AtomsInput>
    </div>
    <div class="my-4 flex items-center justify-center">
      <AtomsInput v-model="radio" input-class="focus-within:border-primary w-96 mt-2 dark:text-gray-200" disabled>
        <template #label>
          <div class="flex items-center justify-between">
            <p class="text-gray-900 dark:text-gray-100">Input Label</p>
            <p class="text-gray-600">Optional</p>
          </div>
        </template>
        <template #prepend>
          <IconMoon class="text-3xl text-gray-200" />
        </template>
        <template #append>
          <IconSun class="text-3xl text-gray-200" />
        </template>
        <template #support>
          <div class="">test</div>
        </template>
      </AtomsInput>
    </div>
    <div class="my-4 flex items-center justify-center gap-6">
      <AtomsToggle v-model="loading" />
      <AtomsToggle v-model="loading" dynamic-radius />
      <AtomsToggle v-model="loading" dynamic-radius outward />
      <AtomsToggle v-model="loading" outward />
    </div>
  </div>
</template>
