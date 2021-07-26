import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: import('@/pages/home/index.vue'),
  },
  {
    path: "/preview",
    name:'preview',
    component: import('@/pages/preview/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router
