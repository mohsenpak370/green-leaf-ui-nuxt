<script setup lang="ts">
const { locale, locales } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const showLocales = ref(false);

const colorMode = useColorMode();
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <div class="container py-4 flex items-center justify-between bg-light-default dark:bg-dark-default sticky top-0">
    <div class="flex items-center gap-2">
      <IconGreenLeaf class="text-3xl md:text-5xl flex-shrink-0" filled />
      <h1 class="text-lg md:text-3xl font-semibold text-gray-700 dark:text-gray-50">Green Leaf UI - Nuxt</h1>
    </div>
    <div class="flex items-center gap-1 md:gap-4">
      <div
        class="relative text-gray-600 dark:text-gray-200 cursor-pointer select-none"
        @click="showLocales = !showLocales"
      >
        <p class="px-2 mx:px-4 py-1 text-sm md:text-lg font-semibold">
          {{ locales.find((i) => i.code === locale)?.name }}
        </p>
        <div
          v-if="showLocales"
          class="p-2 absolute top-10 right-4 border border-light-accent bg-light-default dark:border-gray-700 dark:bg-dark-default rounded-2 flex flex-col gap-1"
        >
          <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="px-4 py-1.5 rounded-1 hover:bg-light-accent dark:hover:bg-dark-accent"
          >
            {{ locale.name }}
          </NuxtLink>
        </div>
      </div>
      <button class="relative w-8 h-8" @click="toggleDarkMode">
        <ColorScheme placeholder="" tag="div">
          <transition-group name="toggle-theme">
            <IconMoon key="moon" v-if="colorMode.value === 'light'" class="absolute inset-0 text-3xl text-gray-600" />
            <IconSun key="sun" v-if="colorMode.value === 'dark'" class="absolute inset-0 text-3xl text-gray-200" />
          </transition-group>
        </ColorScheme>
      </button>
    </div>
  </div>
</template>

<style scoped>
.toggle-theme-enter-active,
.toggle-theme-leave-active {
  transition: all 0.5s ease;
}
.toggle-theme-enter-from,
.toggle-theme-leave-to {
  opacity: 0;
}
</style>
