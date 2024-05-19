<script setup lang="ts">
const colorMode = useColorMode();

const loading = ref(false);

const defaultOptions = [
  { value: 'red', text: 'Red' },
  { value: 'green', text: 'Green' },
  { value: 'blue', text: 'Blue' },
  { value: 'yellow', text: 'Yellow' },
  { value: 'purple', text: 'Purple' },
  { value: 'orange', text: 'Orange' },
  { value: 'pink', text: 'Pink' },
  { value: 'gray', text: 'Gray' },
];

const selectedSingle = ref('');
const selectedArray = ref([]);

const getText = (value: string) => {
  return defaultOptions.find((option) => option.value === value)?.text;
};

const deselect = (value: string) => {
  selectedArray.value = selectedArray.value.filter((option) => option !== value);
};

const options = ref(defaultOptions);

const handleSearch = (query: string) => {
  loading.value = true;
  setTimeout(() => {
    options.value = defaultOptions.filter((option) => option.text.toLowerCase().includes(query.toLowerCase()));
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Select:</h2>
    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ASelect v-model="selectedSingle" :options="options" fixed-text="Select an option" class="dark:text-gray-100" />
      <ASelect
        v-model="selectedArray"
        class="text-gray-900 dark:text-gray-100"
        input-class="border-[#080808] border-opacity-30 dark:border-gray-500"
        dropdown-class="border-[#080808] border-opacity-30 dark:border-gray-500"
        is-searchable
        is-multi-select
        :loading="loading"
        @search="handleSearch"
        :options="options"
      >
        <template #prepend>
          <div class="max-w-60 flex flex-shrink-0 gap-2 overflow-auto" v-auto-animate>
            <p
              v-for="selected in selectedArray"
              :key="selected"
              class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-xs flex items-center gap-2"
              @click.stop.prevent="deselect(selected)"
            >
              {{ getText(selected) }}
              <IconX class="cursor-pointer" />
            </p>
          </div>
        </template>
        <template #loading>
          <MLoadingOverlay
            :color="colorMode.value === 'light' ? 'gray' : 'white'"
            size="sm"
            :type="1"
            overlay-class="bg-light-default/50 dark:bg-dark-default/50"
          />
        </template>
      </ASelect>
      <ASelect
        v-model="selectedSingle"
        class="text-gray-900 dark:text-gray-100"
        input-class="bg-white dark:bg-dark-default border-[#080808] border-opacity-30 dark:border-gray-500"
        dropdown-class="bg-white dark:bg-dark-default border-[#080808] border-opacity-30 dark:border-gray-500"
        fixed-text="Colors"
        :loading="loading"
        open-on-top
        :options="options"
        @search="handleSearch"
      >
        <template v-slot:option="slotProps">
          <div
            class="flex items-center gap-2 m-1 px-4 py-3 rounded-lg hover:bg-[#f6f6f6] dark:hover:bg-dark-accent"
            @click.stop.prevent="selectedSingle = slotProps.option.value"
          >
            <div
              class="size-5 rounded border border-gray-400"
              :class="selectedSingle === slotProps.option.value ? `bg-${slotProps.option.value}-400` : 'bg-white'"
            >
              <IconCheck class="text-white" />
            </div>
            {{ slotProps.option.text }}
          </div>
        </template>
      </ASelect>
    </div>
  </div>
</template>
