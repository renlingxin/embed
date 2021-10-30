import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from '../src/components/init'
const _app = createApp(App).use(store)
_app.use(router)
_app.use(Toast)
_app.mount('#app')
