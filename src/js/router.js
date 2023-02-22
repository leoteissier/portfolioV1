import Vue from 'vue'
import Router from 'vue-router'
import Projects from '/projects/Flip_a_Coin_Game/index.html'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
})
