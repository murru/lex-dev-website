// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",
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
  css: ["@/assets/scss/global.scss"],
  runtimeConfig: {
    public: {
      endpoint: process.env.ENDPOINT,
      project: process.env.PROJECT,
      database: process.env.DATABASE,
      navOptions: process.env.NAV_OPTIONS,
      homepage: process.env.HOMEPAGE,
    },
  },
  ssr: false,
  modules: ["vue3-carousel-nuxt", "@nuxt/image", "@nuxt/ui"],
  compatibilityDate: "2024-10-08",
});
