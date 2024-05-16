<script setup>
const props = defineProps({
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 100,
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
  hideValues: {
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

const emit = defineEmits(['update:minValue', 'update:maxValue']);

const sliderMin = computed({
  get() {
    return Number(props.minValue);
  },
  set(value) {
    value = Number(value);
    if (value > props.maxValue) {
      emit('update:maxValue', value);
    }
    emit('update:minValue', value);
  },
});
const sliderMax = computed({
  get() {
    return props.maxValue;
  },
  set(value) {
    value = Number(value);
    if (value < props.minValue) {
      emit('update:minValue', value);
    }
    emit('update:maxValue', value);
  },
});

const sliderBackground = computed(() => {
  const minValuePercent = Math.ceil(
    ((props.minValue - Number(props.min)) / (Number(props.max) - Number(props.min))) * 100
  );
  const maxValuePercent = Math.floor(
    ((props.maxValue - Number(props.min)) / (Number(props.max) - Number(props.min))) * 100
  );

  return `to right,
    transparent ${minValuePercent}%,
    var(--primary-color) ${minValuePercent}% ${maxValuePercent}%,
    transparent ${maxValuePercent}%`;
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
  <div class="dual-range-slider flex items-center gap-2">
    <span v-if="!hideMinMax" :class="minMaxClass">{{ min }}</span>
    <div class="w-full relative" :style="`height: ${thickness / 4}rem`">
      <input v-model="sliderMin" type="range" :min="min" :max="max" :step="step" :disabled="disabled" />
      <input v-model="sliderMax" type="range" :min="min" :max="max" :step="step" :disabled="disabled" />
      <p
        v-if="!hideValues"
        :class="valueBalloonClass"
        :style="`left: ${minValue}%; transform:translateX(-${minValue}%)`"
      >
        {{ minValue }}
      </p>
      <p
        v-if="!hideValues"
        :class="valueBalloonClass"
        :style="`left: ${maxValue}%; transform:translateX(-${maxValue}%)`"
      >
        {{ maxValue }}
      </p>
    </div>
    <span v-if="!hideMinMax" :class="minMaxClass">{{ max }}</span>
  </div>
</template>

<style>
.dual-range-slider {
  @apply w-full relative;
}

.dual-range-slider input[type='range'] {
  @apply absolute left-0 bottom-0 focus:outline-none;
}

.dual-range-slider input[type='range'] {
  @apply appearance-none w-full bg-gray-200 dark:bg-gray-700;
  background-image: linear-gradient(v-bind(sliderBackground));
  border-radius: v-bind(handleRadius);
}

.dual-range-slider input[type='range']::-webkit-slider-runnable-track {
  @apply w-full cursor-pointer;
  height: v-bind(trackThickness);
}

.dual-range-slider input[type='range']:disabled::-webkit-slider-runnable-track {
  @apply cursor-not-allowed;
}

.dual-range-slider input[type='range']::-webkit-slider-thumb {
  @apply appearance-none relative bg-white ring-4 ring-primary-accent z-10;
  border: v-bind(handleBorderWidth) solid var(--primary-color_accent) !important;
  top: v-bind(handleToPlacement);
  height: v-bind(handleSizeInRem);
  width: v-bind(handleSizeInRem);
  border-radius: v-bind(handleRadius);
}
</style>
