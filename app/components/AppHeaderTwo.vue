<template>
  <v-navigation-drawer v-model="drawer" temporary class="pa-2">
    <v-row
      no-gutters
      class="justify-end d-flex"
      style="padding-right: 8px; padding-top: 8px;"
      role="button"
      @click="drawer = !drawer"
    >
      <v-icon>mdi-close</v-icon>
    </v-row>
    <v-list nav class="pa-8">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="white" elevation="2" class="header-bar">
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-img
      src="/img/nameheader.png"
      alt="Logo"
      :max-width="smAndDown ? 180 : 400"
    />

    <v-spacer />

    <v-btn
      variant="text"
      class="services-link d-none d-md-flex"
      @click="showServices = true"
    >
      Our Services
    </v-btn>
    <v-btn variant="text" class="services-link d-none d-md-flex" @click="showContact = true">
      Contact
    </v-btn>
    <v-btn variant="text" class="services-link d-none d-md-flex" @click="showMap = true">
      Location
    </v-btn>

    <!-- Small screens: icon with dropdown menu -->
    <v-menu location="bottom end" transition="scale-transition">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-dots-vertical"
          variant="text"
          class="d-md-none"
          aria-label="Open menu"
        />
      </template>

      <v-list min-width="200" class="mobile-menu">
        <v-list-item
          v-for="item in mobileItems"
          :key="item.title"
          :title="item.title"
          @click="item.action()"
        />
      </v-list>
    </v-menu>
  </v-app-bar>

  <OurServices v-model="showServices" />
  <ContactDialog v-model="showContact" />
  <MapDialog v-model="showMap" />
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
const drawer = ref(false)
const showServices = ref(false)
const showContact = ref(false)
const showMap = ref(false)
const items = [{ title: 'Home', icon: 'mdi-home', to: '/' }]
const mobileItems = [
  { title: 'Our Services', action: () => (showServices.value = true) },
  { title: 'Contact', action: () => (showContact.value = true) },
  { title: 'Location', action: () => (showMap.value = true) },
]
</script>

<style scoped>
.header-bar {
  background-color: #ffffff;
  color: #000000;
  padding-bottom: 20px;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.app-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: auto;
}

.services-link {
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.mobile-menu :deep(.v-list-item-title) {
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

</style>
