// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // pour utiliser le cdn à la place d'installer la librarie 
  /*
  app: {
  head: {
   link: [{rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css
        }] 
    }
  }
  */
  css: ['~/assets/test.css', 'animate.css'],
  devServer: {
    port: 52133,  // mettre le numéro de port qu'utilise StackBlitz
    host: '0.0.0.0'
  }
})
