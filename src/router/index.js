import Vue from 'vue'
import Home from '../components/Home'
import ElementPage from '../components/ElementPage'
import Router from 'vue-router'
import {i18n} from "../main";

Vue.use(Router);

const routes = [{
    name: 'home',
    path: '/:lang',
    component: Home,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if(!['en', 'pt-BR'].includes(lang)) return next('en')
      if(i18n.locale === lang) return next()
      import(`../lang/${lang}.json`).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs.default || msgs)
        i18n.locale = lang
        return next()
      })
    },
  },
  {
    name: 'element',
    path: '/:lang/element/:id',
    component: ElementPage
  },
  {
    name: 'hi',
    path: '/:lang/hi',
    component: ElementPage
  },
  {
    path: '*',
    redirect: '/en'
  }
]

const Foo = () => import('@/components/ElementPage.vue')

export default new Router({
  routes,
  mode: 'history'
})
