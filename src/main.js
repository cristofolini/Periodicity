import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en.json'
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
const numberFormats = {
  'en': {
    decimal: {
      style: 'decimal', locales: 'en'
    }
  },
  'pt-BR': {
    decimal: {
      style: 'decimal', locales: 'pt-BR'
    }
  }
}
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en },
  numberFormats
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {
    App
  },
  data: {
    project_repo: 'https://github.com/kadinzhang/Periodic-Table'
  },
  i18n,
  router,
  template: '<App/>'
})
