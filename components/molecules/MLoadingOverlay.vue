<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: number | string;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    fixed?: boolean;
    overlayClass?: string;
  }>(),
  {
    type: 1,
    color: 'black',
    size: 'md',
    fixed: false,
  }
);
</script>

<template>
  <div
    class="inset-0 flex items-center justify-center z-10"
    :class="[
      overlayClass,
      {
        absolute: !fixed,
        fixed: fixed,
      },
    ]"
  >
    <ALoader :type="type" :color="color" :size="size" />
  </div>
</template>
