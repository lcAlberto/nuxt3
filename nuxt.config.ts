// import { defineNuxtConfig } from 'nuxt3';
// import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   typeCheck: true,
  // },
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  auth: {
    strategies: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID
      },
    }
  },
  router: {
    // middleware: 'auth'
  }
})
