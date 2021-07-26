import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const _app = createApp(App)
_app.use(router)
_app.mount('#app')
