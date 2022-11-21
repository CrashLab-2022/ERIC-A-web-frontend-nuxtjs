export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'eric-a',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project',
      },
      {
        httpEquiv: 'Content-Security-Policy',
        content: 'upgrade-insecure-requests',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  // modules: ['@nuxtjs/proxy'],

  axios: {
    // baseURL: 'http://eric-a-baegayeon.koyeb.app:3001',
    // baseURL: '/api/',
    // proxy: true,
    // baseURL: 'https://genuine-salamander-326058.netlify.app',
    // baseURL: 'http://localhost:3001',
    // baseURL: 'https://eric-a-server.herokuapp.com',
    // baseURL: 'http://35.73.220.254:3000',
    baseURL: 'http://api.bbbae.shop:3000',
    withCredentials: true,
    // proxy: true,
  },
  proxy: {
    // '/api': 'https://genuine-salamander-326058.netlify.app',
    // '/api': 'http://eric-a-baegayeon.koyeb.app:3001/',
  },
  target: 'static',
};
