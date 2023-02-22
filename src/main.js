import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')


// import './js/firebase.js'
// import { VueFire, VueFireAuth } from 'vuefire'
// app
//     .use(VueFire, {
//         // imported above but could also just be created here
//         firebaseApp,
//         modules: [
//             // we will see other modules later on
//             VueFireAuth(),
//         ],
//     })