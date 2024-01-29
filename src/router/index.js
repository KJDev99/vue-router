import { createRouter, createWebHistory } from "vue-router";

import home from "@/pages/home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/about",
    name: "biz",
    component: () => import("@/pages/about.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/pages/news.vue"),
  },
  {
    path: "/news/:id",
    name: "view",
    component: () => import("@/pages/viewNews.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/pages/product.vue"),
    children:[
        {
            path: 'xarakteristika',
            name: 'xarakteristika',
            component: ()=> import('@/components/product/xarakteristika.vue')
        },
        {
            path: 'xarakteristika',
            name: 'xarakteristika',
            component: ()=> import('@/components/product/xarakteristika.vue')
        },
        {
            path: 'komentariya',
            name: 'komentariya',
            component: ()=> import('@/components/product/comments.vue')
        },
        {
            path: 'dostavka',
            name: 'dostavka',
            component: ()=> import('@/components/product/dostavka.vue')
        },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
