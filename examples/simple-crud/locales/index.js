import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index.js'

import en from './en/index.js'

Vue.use(VueI18n)

const messages = {
  en: en
}

export default new VueI18n({
  locale: store.getters.lng,
  messages,
})
