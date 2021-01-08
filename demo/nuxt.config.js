export default {
  server: {
    timing: {
      total: true
    },
    host: "0.0.0.0",
    port: 4040
  },
  loading: { color: "#666" },

  modules: [
    'nuxt-seo-meta'
  ],
  seoMeta:{
    defaultImage: "defaultImage.png",
    defaultUrl: "https://facebook.com"
  }
}
