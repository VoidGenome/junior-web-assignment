<template>
  <v-footer class="app-footer d-flex flex-column align-center">
    <div class="socials">
      <v-btn
        v-for="s in socials"
        :key="s.label"
        :icon="s.icon"
        :href="s.href"
        :aria-label="s.label"
        target="_blank"
        rel="noopener"
        variant="text"
        color="white"
        size="small"
      />
    </div>

    <p class="copyright">
      Copyright © {{ year }} {{ name }} - All rights reserved
    </p>

    <div class="line" />
  </v-footer>
</template>

<script setup lang="ts">
const name = 'Marci METZGER'
const year = new Date().getFullYear()

// Replace the hrefs with your real profile links
const socials = [
  { label: 'Facebook', icon: 'mdi-facebook', href: 'https://facebook.com/' },
  { label: 'Instagram', icon: 'mdi-instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', icon: 'mdi-linkedin', href: 'https://linkedin.com/' },
  { label: 'Yelp', icon: 'mdi-yelp', href: 'https://yelp.com/' },
]
</script>

<style scoped>
.app-footer {
  background: #000 !important;
  padding: 56px 16px 48px;
}

.socials {
  display: flex;
  gap: 16px;
}

.copyright {
  margin: 28px 0 0;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

.line {
  width: 50px;
  height: 1px;
  margin-top: 24px;
  background: #fff;
}
</style>