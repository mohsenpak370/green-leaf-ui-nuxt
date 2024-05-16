<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: boolean;
    dynamicRadius?: boolean;
    disabled?: boolean;
    outward?: boolean;
  }>(),
  {
    modelValue: true,
    dynamicRadius: false,
    disabled: false,
    outward: false,
  }
);

defineEmits(['update:modelValue']);
</script>

<template>
  <button
    class="px-[0.125rem] flex items-center"
    :class="[
      `${modelValue ? 'bg-primary' : 'bg-gray-400'}`,
      {
        'rounded-1': dynamicRadius,
        'rounded-full': !dynamicRadius,
        'h-6 w-12': !outward,
        'h-4 w-10': outward,
      },
    ]"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      class="relative w-5 h-5 rounded-1 transform duration-300 bg-white shadow"
      :class="{
        'ring-2': outward,
        'translate-x-6': modelValue && !outward,
        'translate-x-5 ring-primary': modelValue && outward,
        '-left-1 ring-gray-400': !modelValue && outward,
        'rounded-1': dynamicRadius,
        'rounded-full': !dynamicRadius,
      }"
    />
  </button>
</template>
