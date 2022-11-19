import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home.vue";


// Here all the routes and nav is managed and created
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: '', path: '/', component: Home },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

export default router;