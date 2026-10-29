<template>
<v-row no-gutters class="pa-4 align-center justify-center d-flex">
  <section class="gallery py-10">
    <h2 class="gallery-title text-center text-white mb-10">Image Gallery</h2>

    <div class="viewport mx-auto">
      <div
        class="track"
        :style="{ '--i': active }"
      >
        <div
          v-for="(img, i) in images"
          :key="img"
          class="slide"
          :class="{ 'slide--active': i === active }"
          @click="active = i"
        >
          <img :src="img" :alt="`Photo ${i + 1}`" draggable="false" />
        </div>
      </div>

      <v-btn
        class="nav nav-left"
        icon="mdi-chevron-left"
        variant="flat"
        color="black"
        size="small"
        @click="prev"
      />
      <v-btn
        class="nav nav-right"
        icon="mdi-chevron-right"
        variant="flat"
        color="black"
        size="small"
        @click="next"
      />
    </div>

    <div class="thumbs mx-auto mt-3">
      <button
        v-for="(img, i) in images"
        :key="'t' + img"
        class="thumb"
        :class="{ 'thumb--active': i === active }"
        @click="active = i"
      >
        <img :src="img" :alt="`Thumbnail ${i + 1}`" />
      </button>
    </div>
  </section>
  </v-row>
</template>

<script setup lang="ts">
const images = [
  '/img/houses1.png',
  '/img/houses2.png',
  '/img/houses3.png',
  '/img/houses4.png',
  '/img/houses5.png',
  '/img/houses7.png',
]

const active = ref(0)

const next = () => (active.value = (active.value + 1) % images.length)
const prev = () => (active.value = (active.value - 1 + images.length) % images.length)

let timer: ReturnType<typeof setInterval>
onMounted(() => (timer = setInterval(next, 5000)))
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.gallery {
  --sw: 81%;
  --gap: 4px;
}
.gallery-title {
  font-family: 'Cinzel', serif;
  font-variant: small-caps;
  font-weight: 400;
  font-size: 2.2rem;
}

.viewport {
  position: relative;
  max-width: 1112px;
  overflow: hidden;
}

.track {
  position: relative;
  display: flex;
  gap: var(--gap);
  width: 100%;
  left: calc((100% - var(--sw)) / 2 - var(--i) * (var(--sw) + var(--gap)));
  transition: left 0.8s ease;
}

.slide {
  flex: 0 0 var(--sw);
  aspect-ratio: 3 / 2;
  opacity: 0.35;
  cursor: pointer;
  transition: opacity 0.8s ease;
}
.slide--active {
  opacity: 1;
  cursor: default;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.7;
  z-index: 2;
}
.nav-left { left: 8px; }
.nav-right { right: 8px; }

.thumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1112px;
}
.thumb {
  width: 70px;
  height: 70px;
  padding: 0;
  border: 2px solid transparent;
  background: none;
  cursor: pointer;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.thumb--active {
  border-color: #fff;
}
</style>