// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Murru Dev's Site - Coming Soon",
      link: [
        { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" }
      ],
      script: [
        { src: "https://kit.fontawesome.com/ea227ca389.js", crossorigin: "anonymous" }
      ]
    }
  }
})
