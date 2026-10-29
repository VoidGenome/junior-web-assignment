<template>
  <v-dialog
    v-model="open"
    max-width="1100"
    scrollable
    :fullscreen="smAndDown"
  >

    <v-card theme="light" rounded="lg" class="services-card">
      <!-- Close button -->
      <v-btn
        icon="mdi-close"
        variant="text"
        class="close-btn"
        aria-label="Close"
        @click="open = false"
      />

      <v-card-text class="px-6 px-md-12 py-10">
        <h2 class="services-title text-center mb-10">Our Services</h2>

        <v-row justify="center">
          <v-col
            v-for="(service, i) in services"
            :key="service.title"
            cols="12"
            md="4"
            class="text-center"
          >
            <v-img
              :src="service.src"
              :alt="service.title"
              aspect-ratio="1"
              cover
              :class="{ 'rounded-circle': service.circle }"
            />

            <h3 class="service-heading mt-6 mb-4">{{ service.title }}</h3>
            <p class="service-text">{{ service.text }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const open = defineModel<boolean>({ default: false })
const services = [
  {
    title: 'Service One',
    text: 'Write a short description of this service here. Two or three sentences work best to keep the three columns balanced.',
    src: '/img/service1.png',
    circle: false,
  },
  {
    title: 'Service Two',
    text: 'Write a short description of this service here. Two or three sentences work best to keep the three columns balanced.',
    src: '/img/service2.png',
    circle: false,
  },
  {
    title: 'Service Three',
    text: 'Write a short description of this service here. Two or three sentences work best to keep the three columns balanced.',
    src: '/img/service3.png',
    circle: true,
  },
]
</script>

<style scoped>
.services-card {
  position: relative;
}
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}

.services-title {
  font-family: 'Cinzel', serif;
  font-variant: small-caps;
  font-weight: 400;
  font-size: 2.2rem;
  color: #a0665c;
}

.service-heading {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0.04em;
  color: #1c1c1c;
}

.service-text {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.95rem;
  line-height: 1.9;
  color: #333;
}
</style>