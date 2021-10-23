import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router