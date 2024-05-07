<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const colorMode = useColorMode();
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};

const switchLocale = () => {
  if (locale.value === 'en') setLocale('fr');
  if (locale.value === 'fr') setLocale('de');
  if (locale.value === 'de') setLocale('en');
};

const showLocales = ref(false);
const langDropDown = ref(null);
onClickOutside(langDropDown, (event) => {
  event.stopPropagation();
  event.preventDefault();
  showLocales.value = false;
});

const showConfig = ref(false);
const config = ref(null);
onClickOutside(config, (event) => (showConfig.value = false));
</script>

<template>
  <div
    class="container py-4 md:py-6 flex items-center justify-between bg-light-default dark:bg-dark-default sticky top-0"
  >
    <div class="flex items-center gap-2">
      <h1 class="relative -top-0.5 text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-50">
        Green Leaf UI
      </h1>
    </div>

    <div class="hidden md:flex items-center gap-1 md:gap-4">
      <div
        class="relative text-gray-600 dark:text-gray-200 cursor-pointer select-none"
        @click="showLocales = !showLocales"
      >
        <p class="px-2 mx:px-4 py-1 text-sm md:text-lg font-medium flex items-end gap-1">
          {{ locales.find((i) => i.code === locale)?.name }}
          <IconChevronDown class="text-xl" filled />
        </p>
        <transition name="toggle-theme">
          <div
            v-if="showLocales"
            ref="langDropDown"
            class="p-2 absolute top-12 right-0 border border-light-accent bg-light-default dark:border-gray-700 dark:bg-dark-default rounded-2 flex flex-col gap-1"
          >
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              @click.stop.prevent
              :to="switchLocalePath(locale.code)"
              class="px-8 py-1.5 rounded-1 text-lg hover:bg-light-accent dark:hover:bg-dark-accent"
            >
              {{ locale.name }}
            </NuxtLink>
          </div>
        </transition>
      </div>
      <button class="relative w-8 h-8" @click="toggleDarkMode">
        <ColorScheme placeholder="" tag="div">
          <transition-group name="toggle-theme">
            <IconMoon key="moon" v-if="colorMode.value === 'light'" class="absolute inset-0 text-3xl text-gray-600" />
            <IconSun key="sun" v-if="colorMode.value === 'dark'" class="absolute inset-0 text-3xl text-gray-200" />
          </transition-group>
        </ColorScheme>
      </button>
      <NuxtLink
        external
        href="https://github.com/mohsenpak370/green-leaf-ui-nuxt"
        target="_blank"
        class="h-9 px-1 flex items-end rounded-1 hover:bg-gray-200 hover:dark:bg-dark-accent"
      >
        <IconGithub class="text-3xl text-gray-600 dark:text-gray-200" />
      </NuxtLink>
    </div>
    <div ref="config" class="relative block md:hidden">
      <button @click="showConfig = !showConfig">
        <IconCog class="text-3xl text-gray-700 dark:text-gray-200" filled />
      </button>
      <transition name="toggle-theme">
        <div
          v-if="showConfig"
          class="p-4 min-w-48 absolute top-12 right-0 border border-light-accent bg-light-default dark:border-gray-700 dark:bg-dark-default rounded-2 flex flex-col gap-1"
        >
          <div class="flex items-center justify-between gap-12 text-gray-700 dark:text-gray-200">
            <p class="text-lg">{{ capitalizeFirstLetter($t('theme')) }}:</p>
            <button class="relative w-6 h-6" @click.stop.prevent="toggleDarkMode">
              <ColorScheme placeholder="" tag="div">
                <IconMoon
                  key="moon"
                  v-if="colorMode.value === 'light'"
                  class="absolute inset-0 text-2xl text-gray-600"
                />
                <IconSun key="sun" v-if="colorMode.value === 'dark'" class="absolute inset-0 text-2xl text-gray-200" />
              </ColorScheme>
            </button>
          </div>
          <div class="mt-4 flex items-center justify-between gap-12 text-gray-700 dark:text-gray-200">
            <p class="text-lg">{{ $t('language') }}:</p>
            <button @click.stop.prevent="switchLocale">{{ locale.toUpperCase() }}</button>
          </div>
        </div>
      </transition>
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
