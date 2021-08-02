import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const _app = createApp(App).use(store)
_app.use(router)
_app.mount('#app')
