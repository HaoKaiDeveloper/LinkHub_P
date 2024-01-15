// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  plugins: ["~/plugins/imgload"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    // dir: "assets/images",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  imports: {
    dirs: ["./stores/**"],
  },
  nitro: {
    plugins: ["@/server/index"],
  },
  runtimeConfig: {
    public: {
      googleClientId:
        "56414249910-8kvrpiofvfagbgk0tletd23unfth3j0c.apps.googleusercontent.com",
    },
  },
});
