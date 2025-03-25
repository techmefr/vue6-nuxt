// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/test.css'],
  devServer: {
    port: 49269,  // StackBlitz attend ce port
    host: '0.0.0.0'
  }
})
