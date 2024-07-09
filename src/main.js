import './assets/styles/tailwind.css'
import './assets/styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
import {createI18n} from 'vue-i18n'
import en from '@/lenguage/en.json'
import ru from '@/lenguage/ru.json'
const i18n = createI18n({
    locale: 'en',
    legacy: false,
    fallbackLocale: 'en',
    messages: {
      en: en,
      ru: ru,
    }
  })


app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
