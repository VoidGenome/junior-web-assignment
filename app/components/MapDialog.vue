<template>
  <v-dialog v-model="open" max-width="1000" :fullscreen="xs">
    <v-card rounded="lg" class="map-card">
      <v-btn
        icon="mdi-close"
        variant="flat"
        color="white"
        size="small"
        class="close-btn"
        aria-label="Close"
        @click="open = false"
      />

      <div class="map-wrapper">
        <iframe
          v-if="open"
          :src="embedUrl"
          title="Office location"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        />

        <v-btn
          :href="directionsUrl"
          target="_blank"
          rel="noopener"
          rounded="pill"
          color="grey-lighten-3"
          class="directions-btn"
          prepend-icon="mdi-navigation-variant"
        >
          Get Directions
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()
const open = defineModel<boolean>({ default: false })

const address = '3190 HW-160, Suite F, Pahrump, Nevada 89048, United States'

// Embedded map with a pin (no API key needed)
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

// Opens Google Maps with directions to the address
const directionsUrl = `https://www.google.com/maps?daddr=${encodeURIComponent(address)}`
</script>

<style scoped>
.map-card {
  position: relative;
  overflow: hidden;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 400px;
}
.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.directions-btn {
  position: absolute;
  left: 16px;
  bottom: 28px;
  z-index: 2;
  font-weight: 600;
  letter-spacing: 0.1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
  .map-wrapper {
    height: 100vh;
  }
}
</style>