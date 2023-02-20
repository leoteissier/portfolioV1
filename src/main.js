import { createApp } from 'vue'
import Vuefire from 'vuefire';
import App from './App.vue'

import './style/style.css'

Vue.use(Vuefire);
createApp(App).mount('#app')