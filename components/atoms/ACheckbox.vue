<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    value: string;
    label?: string;
    labelClasses?: string;
  }>(),
  {
    size: 'md',
  }
);
const emit = defineEmits(['update:modelValue', 'change']);

const vModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
    emit('change');
  },
});
</script>

<template>
  <label
    class="checkbox-wrapper inline-flex items-center gap-2 select-none group"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
  >
    <input v-model="vModelValue" :value="value" class="inp-cbx" type="checkbox" :disabled="disabled" />
    <span class="cbx">
      <span
        class="border border-gray-300 group-hover:border-primary disabled:border-gray-200 checked:border-primary-accent"
        :class="{
          'size-4 ': size === 'sm',
          'size-6 ': size === 'md',
          'size-8 ': size === 'lg',
          'cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        }"
      >
        <svg
          :class="{
            'size-[0.55rem]': size === 'sm',
            'size-[1.05rem]': size === 'md',
            'size-6 before:size-6': size === 'lg',
          }"
        >
          <use xlink:href="#check-4"></use>
        </svg>
      </span>
    </span>
    <span :class="labelClasses">{{ label }}</span>
    <slot />
    <svg class="inline-svg">
      <symbol id="check-4" viewBox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </symbol>
    </svg>
  </label>
</template>

<style scoped>
.checkbox-wrapper .cbx {
  transition: all 0.2s ease;
  display: inline-block;
}

.checkbox-wrapper .cbx span {
  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper .cbx span:first-child {
  position: relative;
  border-radius: 0.25rem;
  transform: scale(1);
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);
}
.checkbox-wrapper .cbx span:first-child svg {
  position: absolute;
  top: 0.1875rem;
  left: 0.14rem;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1rem;
  stroke-dashoffset: 1rem;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}

.checkbox-wrapper .inp-cbx {
  position: absolute;
  visibility: hidden;
}
.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child {
  background: var(--primary-color);
  border-color: var(--primary-color);
  animation: wave-4 0.4s ease;
}
.checkbox-wrapper .inp-cbx:disabled + .cbx span:first-child {
  background: #bbb;
  border-color: #bbb;
  animation: wave-4 0.4s ease;
}

.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.checkbox-wrapper .inline-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
@media screen and (max-width: 640px) {
  .checkbox-wrapper .cbx {
    display: inline-block;
  }
}
@-moz-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
@-webkit-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
@-o-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
@keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
</style>
