<script setup lang="ts">
const loading = ref(false);

const colorMode = useColorMode();

const onClick = () => {
  console.log('clicked');
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
</script>

<template>
  <div class="mt-16">
    <h2 class="text-xl text-gray-900 dark:text-gray-100">Buttons:</h2>
    <div class="mt-12 flex items-center flex-wrap justify-center gap-8">
      <AButton class="dark:text-gray-100" :loading="loading" @click="onClick"> Click here </AButton>
      <AButton
        class="text-white rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-2xl bg-gradient-to-l from-orange-400 to-blue-300 hover:from-blue-300 hover:to-orange-400"
        :loading="loading"
        @click="onClick"
      >
        <template v-slot:loading>
          <ALoader color="white" size="sm" :type="1" />
        </template>
        Click here
      </AButton>
      <AButton class="border-2 border-current dark:text-gray-100 rounded-none" :loading="loading" @click="onClick">
        <template v-slot:loading>
          <ALoader :color="colorMode.value === 'light' ? 'black' : 'white'" size="sm" :type="3" />
        </template>
        Click here
      </AButton>
      <AButton class="bg-green-600 text-gray-100 rounded-full" :loading="loading" @click="onClick">
        <template v-slot:loading>
          <ALoader color="white" size="sm" :type="4" />
        </template>
        Click here
      </AButton>
      <MButtonPrimary filled :loading="loading" @click="onClick"> Click here </MButtonPrimary>
      <MButtonPrimary :loading="loading" @click="onClick"> Click here </MButtonPrimary>
      <MButtonPrimary disabled @click="onClick"> Click here </MButtonPrimary>
      <AButton
        class="w-12 !px-0 bg-green-600 hover:bg-green-700 text-white border-none"
        :loading="loading"
        @click="onClick"
      >
        <IconEye filled class="text-2xl" />
        <template v-slot:loading>
          <ALoader class="w-4" color="white" size="lg" :type="5" />
        </template>
      </AButton>
      <AButton
        class="w-12 !px-0 bg-primary hover:bg-primary-accent text-white border-none"
        :loading="loading"
        @click="onClick"
      >
        <IconEye filled class="text-2xl" />
        <template v-slot:loading>
          <ALoader class="w-4" color="white" size="lg" :type="4" />
        </template>
      </AButton>
    </div>
  </div>
</template>
