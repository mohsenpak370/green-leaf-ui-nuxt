<script setup lang="ts"></script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">CSS Variables:</h2>
    <div class="mt-12 flex items-center flex-wrap gap-16">
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-primary rounded-1" />
        <p class="dark:text-gray-200">Primary</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-primary-accent rounded-1" />
        <p class="dark:text-gray-200">Primary Accent</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-secondary rounded-1" />
        <p class="dark:text-gray-200">Secondary</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-secondary-accent rounded-1" />
        <p class="dark:text-gray-200">Secondary Accent</p>
      </div>
    </div>
    <div class="mt-12 flex items-center flex-wrap gap-16">
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-light-default rounded-1 border" />
        <p class="dark:text-gray-200">Background light default</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-light-accent rounded-1 border" />
        <p class="dark:text-gray-200">Background light accent</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-dark-default rounded-1 border" />
        <p class="dark:text-gray-200">Background dark default</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 bg-dark-accent rounded-1" />
        <p class="dark:text-gray-200">Background dark accent</p>
      </div>
    </div>
    <div class="mt-12 flex items-center flex-wrap gap-16">
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 rounded-1 border border-gray-400" />
        <p class="dark:text-gray-200">Border Radius 1</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="w-20 h-10 rounded-2 border border-gray-400" />
        <p class="dark:text-gray-200">Border Radius 2</p>
      </div>
    </div>
  </div>
</template>
