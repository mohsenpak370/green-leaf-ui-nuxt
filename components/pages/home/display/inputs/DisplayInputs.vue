<script setup lang="ts">
const input = ref('');
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Inputs:</h2>
    <div class="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
      <AInput v-model="input" input-class="dark:text-gray-100 dark:border-gray-700" />
      <AInput
        v-model="input"
        type="email"
        input-class="dark:text-gray-100 dark:border-gray-700 focus-within:border-primary"
        placeholder="example@email.com"
      >
        <template #prepend>
          <IconMail class="relative text-[1.8rem] text-gray-400" filled />
        </template>
      </AInput>
      <AInput
        v-model="input"
        input-class="dark:text-gray-100 dark:border-gray-700 focus-within:border-primary"
        placeholder="********"
        type="password"
      />
      <AInput v-model="input" input-class="text-gray-400 dark:border-gray-700 user-select-none" disabled>
        <template #prepend>
          <IconMoon class="text-3xl text-gray-300 dark:text-gray-600" />
        </template>
        <template #append>
          <IconSun class="text-3xl text-gray-300 dark:text-gray-600" />
        </template>
      </AInput>
      <AInput
        v-model="input"
        input-class="mt-2 focus-within:border-primary dark:text-gray-200"
        label="Input Label"
        required
        label-class="dark:text-gray-100"
      />
      <AInput
        v-model="input"
        placeholder="Input Placeholder"
        input-class="mt-2 border-green-500 dark:text-gray-200 focus-within:ring-2"
      >
        <template #label>
          <div class="flex items-center justify-between">
            <p class="text-gray-900 dark:text-gray-100">Custom Input Label</p>
            <p class="text-sm text-gray-400">(Optional)</p>
          </div>
        </template>
        <template #support>
          <div class="mt-1 text-sm text-gray-700 dark:text-gray-300">Input support text</div>
        </template>
      </AInput>
    </div>
  </div>
</template>
