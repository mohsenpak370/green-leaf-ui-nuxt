<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: String,
    default: '0',
  },
  max: {
    type: String,
    default: '100',
  },
  step: {
    type: String,
    default: '1',
  },
  thickness: {
    type: Number,
    default: 2,
  },
  handleSize: {
    type: Number,
    default: 3,
  },
  dynamicRadius: {
    type: Boolean,
    default: false,
  },
  hideValue: {
    type: Boolean,
    default: false,
  },
  hideMinMax: {
    type: Boolean,
    default: false,
  },
  valueBalloonClass: {
    type: String,
    default: 'w-6 text-center absolute top-8 text-gray-900 dark:text-gray-100 select-none',
  },
  minMaxClass: {
    type: String,
    default: 'text-gray-500 dark:text-gray-400',
  },
  disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const sliderValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    value = Number(value);
    emit('update:modelValue', value);
  },
});

const sliderBackground = computed(() => {
  const sliderValuePercent = Math.floor(
    ((props.modelValue - Number(props.min)) / (Number(props.max) - Number(props.min))) * 100
  );

  return `to right,
    var(--primary-color) ${sliderValuePercent}%,
    transparent ${sliderValuePercent}%`;
});

const handleRadius = computed(() => {
  return props.dynamicRadius ? 'var(--border-radius-1)' : '10rem';
});
const handleSizeInRem = computed(() => {
  return (Number(props.handleSize) + 2) / 4 + 'rem';
});
const handleToPlacement = computed(() => {
  return (props.thickness - props.handleSize - 2) / 8 + 'rem';
});
const handleBorderWidth = computed(() => {
  return props.handleSize / 9 + 'rem';
});
const trackThickness = computed(() => {
  return props.thickness / 4 + 'rem';
});
</script>

<template>
  <div class="range-slider flex items-center gap-2">
    <span v-if="!hideMinMax" :class="minMaxClass">{{ min }}</span>
    <div class="w-full relative" :style="`height: ${thickness / 4}rem`">
      <input v-model="sliderValue" type="range" :min="min" :max="max" :step="step" :disabled="disabled" />
      <p
        v-if="!hideValue"
        :class="valueBalloonClass"
        :style="`left: ${modelValue}%; transform:translateX(-${modelValue}%)`"
      >
        {{ modelValue }}
      </p>
    </div>
    <span v-if="!hideMinMax" :class="minMaxClass">{{ max }}</span>
  </div>
</template>

<style>
.range-slider {
  @apply w-full relative;
}

.range-slider input[type='range'] {
  @apply absolute left-0 bottom-0 focus:outline-none;
}

.range-slider input[type='range'] {
  @apply appearance-none w-full bg-gray-200 dark:bg-gray-700;
  background-image: linear-gradient(v-bind(sliderBackground));
  border-radius: v-bind(handleRadius);
}

.range-slider input[type='range']::-webkit-slider-runnable-track {
  @apply w-full cursor-pointer;
  height: v-bind(trackThickness);
  border-radius: v-bind(handleRadius);
}

.range-slider input[type='range']:disabled::-webkit-slider-runnable-track {
  @apply cursor-not-allowed;
}

.range-slider input[type='range']::-webkit-slider-thumb {
  @apply appearance-none relative bg-white ring-4 ring-primary-accent z-10;
  border: v-bind(handleBorderWidth) solid var(--primary-color_accent) !important;
  top: v-bind(handleToPlacement);
  height: v-bind(handleSizeInRem);
  width: v-bind(handleSizeInRem);
  border-radius: v-bind(handleRadius);
}
</style>
