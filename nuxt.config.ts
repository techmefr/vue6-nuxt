// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/test.css'],
  devServer: {
    port: 51680,  // mettre le numéro de port qu'utilise StackBlitz
    host: '0.0.0.0'
  }
})
