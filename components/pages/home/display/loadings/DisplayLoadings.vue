<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Loading:</h2>
    <div class="mt-12 hidden xl:flex items-center flex-wrap gap-16">
      <AtomsLoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="1" />
      <AtomsLoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="2" />
      <AtomsLoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="3" />
      <AtomsLoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="4" />
      <AtomsLoader size="sm" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="5" />
    </div>
    <div class="mt-12 flex items-center flex-wrap gap-16">
      <AtomsLoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="1" />
      <AtomsLoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="2" />
      <AtomsLoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="3" />
      <AtomsLoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="4" />
      <AtomsLoader :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="5" />
    </div>
    <div class="mt-12 hidden xl:flex items-center flex-wrap gap-16">
      <AtomsLoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="1" />
      <AtomsLoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="2" />
      <AtomsLoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="3" />
      <AtomsLoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="4" />
      <AtomsLoader size="lg" :color="colorMode.value === 'light' ? 'gray' : 'white'" :type="5" />
    </div>
  </div>
</template>
