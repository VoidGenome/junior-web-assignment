<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';

</script>

<template>
  <v-app>
    <AppHeaderTwo/>
    <v-main>
      <slot />
    </v-main>
    <AppFooter/>
  </v-app>
</template>
