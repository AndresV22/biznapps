import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: () => import('@/views/Home.vue')},
    {path: '/about', component: () => import('@/views/AboutUs.vue')},
    {path: '/products', component: () => import('@/views/Products.vue')},
    {path: '/successcases', component: () => import('@/views/SuccessCases.vue')},
    { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router