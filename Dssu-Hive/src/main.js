import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import routers from './router'  // router import
const app = createApp(App)
app.use(routers)  // router 추가
app.mount('#app')