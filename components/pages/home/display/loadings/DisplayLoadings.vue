<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Loading:</h2>
    <div class="mt-12 hidden xl:flex items-center flex-wrap gap-16">
      <ALoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="1" />
      <ALoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="2" />
      <ALoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="3" />
      <ALoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="4" />
      <ALoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="5" />
    </div>
    <div class="mt-12 flex items-center flex-wrap gap-16">
      <ALoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="1" />
      <ALoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="2" />
      <ALoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="3" />
      <ALoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="4" />
      <ALoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="5" />
    </div>
    <div class="mt-12 hidden xl:flex items-center flex-wrap gap-16">
      <ALoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="1" />
      <ALoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="2" />
      <ALoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="3" />
      <ALoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="4" />
      <ALoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="5" />
    </div>
  </div>
</template>
