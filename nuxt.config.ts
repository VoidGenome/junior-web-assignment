export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: false
  },

  modules: [
    'vuetify-nuxt-module'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  vuetify: {
    moduleOptions: {
      prefixComposables: ['useLayout']
    },
     vuetifyOptions: './vuetify.options.ts'
  },
  app: {
    head: {
      title: 'Marci Metzger Homes - Rea State',
      meta: [
        {
          name: 'description',
          content: 'Marci Metzger Homes - Rea State'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      idxUrl:  process.env.NUXT_PUBLIC_IDX_URL || '',
    },
  },
})