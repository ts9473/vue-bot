import './assets/main.css'
import WebApp from '@twa-dev/sdk'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

WebApp.ready()
app.use(createPinia())
app.use(router)

app.mount('#app')
