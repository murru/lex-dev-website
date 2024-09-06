// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/ea227ca389.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  ssr: false,
  modules: ["vue3-carousel-nuxt", "@nuxt/image"],
});