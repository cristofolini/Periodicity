import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#232937',
    secondary: '#282e3c',
    accent: '#303747',
    info: '#323642',
    error: '#ff643d'
  }
})

Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  },
  i18n,
  router,
  template: '<App/>'
})
