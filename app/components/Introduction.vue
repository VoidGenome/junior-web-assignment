<template>
<v-row class="pa-10 ma-0" no-gutters style="background-color: white;">
  <v-carousel
    v-model="current"
    height="450"
    cycle
    :interval="5000"
    :show-arrows="false"
    hide-delimiter-background
    transition="slow-fade"
    reverse-transition="slow-fade"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="slide.title"
      :value="i"
      :src="slide.src"
      cover
      gradient="to bottom, rgba(0,0,0,.35), rgba(0,0,0,.55)"
      rounded="lg"
    >
      <div
        v-if="current === i"
        class="slide-content d-flex flex-column align-center justify-end text-center text-white pb-12"
      >
        <h2 class="text-h3 mb-6 fade-up delay-2">{{ slide.title }}</h2>
        <div class="text-subtitle-1 mb-1 fade-up delay-1 mx-15">{{ slide.subtitle }}</div>
      </div>
    </v-carousel-item>
  </v-carousel>
</v-row>
</template>

<script setup lang="ts">
const current = ref(0)
const slides = [
  {
    src: '/img/whitehouse.png',
    title: 'Top Residential Sales Last 5 Years',
    subtitle: 'We helped nearly 90 clients in 2021 and closed $28.5 million in sales. Our clients deserve our best, and we work to make it better every year.',
  },
  {
    src: '/img/housewithpool.png',
    subtitle: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    title: "Don't Just List it...",
  },
  {
    src: '/img/housekey.png',
    subtitle: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
    title: 'Guide to Buyers',
  },
]
</script>

<style>
.slow-fade-enter-active,
.slow-fade-leave-active {
  transition: opacity 1.5s ease;
}
.slow-fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.slow-fade-enter-from,
.slow-fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
:deep(.v-responsive__content) {
  width: 100% !important;
}
.slide-content {
  height: 100%;
  width: 100%;
}

.fade-up {
  opacity: 0;
  animation: fadeUp 1.2s ease forwards;
}
.delay-1 { animation-delay: 0.3s; }
.delay-2 { animation-delay: 0.6s; }
.delay-3 { animation-delay: 0.9s; }

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>