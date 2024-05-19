<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string | number | string[] | number[];
    inputClass?: string;
    label?: string;
    labelClass?: string;
    dropdownClass?: string;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    isMultiSelect?: boolean;
    isSearchable?: boolean;
    fixedText?: string;
    openOnTop?: boolean;
    options: { value: string | number; text: string }[];
  }>(),
  {}
);

const emits = defineEmits(['update:modelValue', 'search']);

const searchQuery = ref('');

const isOpen = ref(false);
const selectComponent = ref(null);
onClickOutside(selectComponent, (e) => {
  isOpen.value = false;
});

const handleSelect = (value: string | number) => {
  if (props.isMultiSelect) {
    const selectedSet = new Set(props.modelValue as string[]);
    if (selectedSet.has(String(value))) {
      selectedSet.delete(String(value));
    } else {
      selectedSet.add(String(value));
    }
    console.log('update', Array.from(selectedSet));
    emits('update:modelValue', Array.from(selectedSet));
  }

  if (!props.isMultiSelect) {
    emits('update:modelValue', value);
    searchQuery.value = '';
    isOpen.value = false;
  }
};

const isSelected = (value: string | number) => {
  if (props.isMultiSelect) {
    return new Set(props.modelValue as string[]).has(String(value));
  }
  return String(props.modelValue) === String(value);
};
</script>

<template>
  <div ref="selectComponent" class="relative w-full" v-auto-animate="{ duration: 100, easing: 'ease' }">
    <slot v-if="!label" name="label" />
    <label v-if="label" :class="['block', labelClass]">
      {{ label }}
    </label>
    <label
      class="px-2 h-12 flex items-center justify-between gap-2 rounded-1 border"
      :class="[{ 'ring-4': isOpen }, inputClass]"
      @click.stop.prevent="isOpen = true"
    >
      <slot name="prepend" />
      <input
        v-if="isSearchable"
        v-model="searchQuery"
        type="text"
        :disabled="!isSearchable"
        :placeholder="placeholder"
        class="w-full h-full bg-transparent outline-none"
        @input="$emit('search', searchQuery)"
      />
      <span v-if="fixedText">{{ fixedText }}</span>
      <span class="flex-shrink-0 flex items-center gap-1 cursor-pointer" @click.stop.prevent="isOpen = !isOpen">
        <IconChevronDown filled class="text-2xl relative top-0.5" :class="isOpen ? 'rotate-180' : 'rotate-0'" />
      </span>
    </label>
    <slot name="support" />
    <div
      v-if="isOpen"
      class="absolute border rounded-1 w-full max-h-44 bg-light-default dark:bg-dark-default overflow-y-auto z-10"
      :class="[
        dropdownClass,
        {
          'min-h-44': loading || !options?.length,
          'top-[3.25rem]': !openOnTop,
          'bottom-[3.25rem]': openOnTop,
        },
      ]"
    >
      <slot v-if="loading" name="loading">
        <div class="absolute inset-0 flex items-center justify-center">Loading...</div>
      </slot>
      <slot v-else-if="!options?.length" name="emptyList">
        <div class="absolute inset-0 flex items-center justify-center">No option is available</div>
      </slot>

      <div v-else class="">
        <slot v-for="option in options" :key="option.value" name="option" :option="option">
          <div
            class="px-2 py-1 hover:bg-light-accent dark:hover:bg-dark-accent flex items-center justify-between"
            :class="isSelected(option.value) ? 'bg-light-accent dark:bg-dark-accent' : ''"
            @click="handleSelect(option.value)"
          >
            {{ option.text }}
            <IconCheck v-if="isSelected(option.value)" class="" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
