<script setup lang="ts">
const showBookingModal = useState('showBooking');
</script>

<template>
  <div class="bg-primary fixed w-screen top-0 z-20">
    <div class="container py-3 md:py-6 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h1 class="relative -top-0.5 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-50">
          Shiraz Wine Farm
        </h1>
      </div>
      <AButton
        class="border-transparent bg-white text-xl hover:bg-gray-200 text-gray-800"
        @click="showBookingModal = true"
      >
        Book a Tour
      </AButton>
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
