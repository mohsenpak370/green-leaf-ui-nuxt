<script setup lang="ts">
definePageMeta({
  layout: 'workshop',
});

const showBookingModal = useState('showBooking', () => false);
const name = ref('');
const lastName = ref('');
const number = ref('');
const favorite = ref('');
const type = ref(['red', 'white']);
const radio = ref('a');
const min = ref(100);
const max = ref(1000);

const products = [
  {
    name: 'Sweet Sunshine',
    description: 'A sweet red wine that reminds you of beautiful sunny days, with a fresh and refreshing taste.',
    image: '/images/wine1.webp',
    price: '470',
    rating: 3.5,
    age: 5,
  },
  {
    name: 'Golden Harvest',
    description: 'A rich white wine with notes of golden apples and honey, perfect for autumn evenings.',
    image: '/images/wine2.webp',
    price: '520',
    rating: 4.2,
    age: 3,
  },
  {
    name: 'Mystic Rose',
    description: 'A delicate rosé wine with hints of strawberry and rose petals, ideal for summer picnics.',
    image: '/images/wine3.webp',
    price: '490',
    rating: 4.0,
    age: 2,
  },
  {
    name: 'Velvet Night',
    description:
      'A full-bodied red wine with deep flavors of blackberry and dark chocolate, perfect for a cozy night in.',
    image: '/images/wine4.webp',
    price: '600',
    rating: 4.5,
    age: 7,
  },
  // {
  //   "name": "Crystal Dew",
  //   "description": "A crisp and clean white wine with notes of citrus and green apple, refreshing and invigorating.",
  //   "image": "/images/wine5.webp",
  //   "price": "450",
  //   "rating": 3.8,
  //   "age": 4
  // },
  // {
  //   "name": "Sunset Bliss",
  //   "description": "A medium-bodied rosé wine with flavors of peach and apricot, perfect for enjoying at sunset.",
  //   "image": "/images/wine6.webp",
  //   "price": "530",
  //   "rating": 4.3,
  //   "age": 3
  // },
  // {
  //   "name": "Ruby Delight",
  //   "description": "A sweet red wine with notes of cherry and vanilla, great for desserts and celebrations.",
  //   "image": "/images/wine1.webp",
  //   "price": "470",
  //   "rating": 3.9,
  //   "age": 5
  // },
  // {
  //   "name": "Emerald Valley",
  //   "description": "A vibrant white wine with tropical fruit flavors, perfect for a sunny afternoon.",
  //   "image": "/images/wine2.webp",
  //   "price": "480",
  //   "rating": 4.1,
  //   "age": 3
  // },
  // {
  //   "name": "Blush Harmony",
  //   "description": "A light and refreshing rosé wine with a harmonious balance of floral and fruity notes.",
  //   "image": "/images/wine4.webp",
  //   "price": "500",
  //   "rating": 4.0,
  //   "age": 2
  // },
  // {
  //   "name": "Crimson Sunset",
  //   "description": "A robust red wine with intense flavors of plum and spice, perfect for a bold palate.",
  //   "image": "/images/wine3.webp",
  //   "price": "620",
  //   "rating": 4.6,
  //   "age": 6
  // }
];
</script>

<template>
  <div>
    <div class="min-h-screen relative bg-[url('/images/banner.webp')] bg-cover">
      <div class="banner-gradient absolute inset-0" />
      <div class="relative min-h-screen container flex items-center">
        <div class="">
          <h1 class="text-7xl text-white font-semibold">Taste the Excellence</h1>
          <p class="mt-8 text-gray-200 max-w-3xl text-2xl font-thin tracking-widest">
            Have a wonderful journey at our farm, enjoy the taste of our wines, and create one of your best memories.
          </p>
          <div class="mt-12 flex gap-8">
            <AButton class="border-transparent text-lg bg-white hover:bg-gray-200 text-gray-800">
              See our products
            </AButton>
            <MButtonSecondary filled class="text-xl" @click="showBookingModal = true"> Book a Tour </MButtonSecondary>
          </div>
        </div>
      </div>
    </div>
    <div class="h-screen container py-20">
      <h2 class="text-2xl md:text-4xl">Our Products:</h2>
      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2 grid lg:grid-cols-2 gap-10">
          <div v-for="product in products" :key="product.name">
            <img :src="product.image" class="w-full aspect-[5/4] rounded-2 shadow-sm object-cover" alt="wine" />
            <div class="bg-white p-4 border scale-95 rounded-2 shadow-sm relative -top-8">
              <p class="text-center text-xl">{{ product.name }}</p>
              <p class="mt-1 text-center text-gray-400">{{ product.description }}</p>
              <p class="mt-4 text-center text-secondary flex items-center justify-center">
                <IconBottle class="text-xl" />
                Age: {{ product.age }} years
                <IconStar class="ml-6 text-lg" />
                Rating: {{ product.rating }}
              </p>
              <MButtonPrimary filled class="mt-8 w-full">Add to Cart (Price: ${{ product.price }})</MButtonPrimary>
            </div>
          </div>
        </div>
        <div class="sticky top-32 h-96">
          <p class="pb-4 text-xl">Type:</p>
          <ACheckbox v-model="type" value="red" label="Red Wine" class="mr-8" />
          <ACheckbox v-model="type" value="white" label="White Wine" />
          <p class="mt-8 pb-4 text-xl">Sort by:</p>
          <ARadio v-model="radio" value="a" label="Price" class="mr-8" />
          <ARadio v-model="radio" value="b" label="Age" class="mr-8" />
          <ARadio v-model="radio" value="c" label="Name" />
          <p class="mt-8 pb-4 text-xl">Price Range:</p>
          <div class="tracking-widest font-thin">
            From
            <span class="inline-block w-24 border border-primary-accent rounded-1 py-1 px-2 font-medium text-lg"
              >${{ min }}</span
            >
            To
            <span class="inline-block w-24 border border-primary-accent rounded-1 py-1 px-2 font-medium text-lg"
              >${{ max }}</span
            >
          </div>
          <ADualRangeSlider
            v-model:min-value="min"
            v-model:max-value="max"
            min="100"
            max="1000"
            class="mt-8 mb-8"
            hide-min-max
            hide-values
            dynamic-radius
          />
        </div>
      </div>
    </div>
    <div v-if="showBookingModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-gray-700/50" @click="showBookingModal = false"></div>
      <div class="relative w-11/12 max-w-4xl bg-white rounded-2 p-8">
        <h2 class="text-2xl">Please fill the following data</h2>
        <form class="mt-8 grid md:grid-cols-2 gap-8">
          <AInput
            v-model="name"
            label="First Name"
            required
            placeholder="Alex"
            input-class="focus-within:border-primary"
          />
          <AInput
            v-model="lastName"
            label="Family Name"
            required
            placeholder="Cheng"
            input-class="focus-within:border-primary"
          />
          <AInput
            v-model="number"
            label="Number of companions"
            required
            placeholder="8"
            input-class="focus-within:border-primary"
          />
          <AInput
            v-model="favorite"
            label="Favorite taste"
            required
            placeholder="ex. Sweet"
            input-class="focus-within:border-primary"
          />
        </form>
        <div class="mt-10">
          <ACheckbox>
            <p>I have read and accept the <NuxtLink class="text-blue-500 hover:underline">Privacy Policy</NuxtLink>.</p>
          </ACheckbox>
        </div>
        <div class="mt-12 flex justify-end gap-4">
          <MButtonPrimary @click="showBookingModal = false" class="px-8">Cansel</MButtonPrimary>
          <MButtonPrimary filled @click="showBookingModal = false" class="px-8">Submit</MButtonPrimary>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner-gradient {
  background-image: radial-gradient(
      farthest-corner at 15% 280px,
      var(--primary-color) 30%,

      transparent 100%
    ),
    linear-gradient(var(--primary-color) 10%, transparent 30%);
}
</style>
