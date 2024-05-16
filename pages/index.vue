<script setup lang="ts"></script>

<template>
  <div class="container pb-20">
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
    <PagesHomeDisplayCssVariables />
    <PagesHomeDisplayButtons />
    <PagesHomeDisplayRadio />
    <PagesHomeDisplayCheckbox />
    <PagesHomeDisplayInputs />
    <PagesHomeDisplayToggles />
    <PagesHomeDisplayLoadings />
    <PagesHomeDisplayRangeSliders />
  </div>
</template>
