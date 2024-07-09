import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/Pages/Homepages.vue'
import { useCounterStore } from "@/stores/counter";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/Pages/Aboutpages.vue')
    },
    {
      path: '/avto',
      name: 'avto',
      component: () => import('@/components/Pages/Avtopages.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/components/Pages/Blogpages.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('@/components/Pages/Brandpages.vue')
    },
    {
      path: '/uslug',
      name: 'uslug',
      component: () => import('@/components/Pages/Uslugpages.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/Pages/Contactpages.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/components/Pages/Faqpages.vue')
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('@/components/Pages/Conditionspages.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () =>import("@/components/Pages/404NotFound.vue"),
    },
    {
      path: '/uslugbuggies',
      name: 'uslugbuggies',
      component: () => import('@/components/Pages/viewPages/Uslugview1.vue')
    },
    {
      path: '/uslugcar',
      name: 'uslugcar',
      component: () => import('@/components/Pages/viewPages/Uslugview2.vue')
    },
    {
      path: '/product/:id',
      name: 'idproduct',
      component: () => import('@/views/idProduct.vue'),

    },
    {
      path: '/blogview1',
      name: 'blogview1',
      component: () => import('@/components/Pages/viewPages/blogview1.vue')
    },
    {
      path: '/blogview2',
      name: 'blogview2',
      component: () => import('@/components/Pages/viewPages/blogview2.vue')
    },
    {
      path: '/blogview3',
      name: 'blogview3',
      component: () => import('@/components/Pages/viewPages/blogview3.vue')
    },  
  ]
})

export default router
