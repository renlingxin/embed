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
// router.beforeEach((to,from,next)=>{
// console.log(to,from);
//   setTimeout(() => {
//     next()
//     console.log('截取到了');
//   }, 2000);
// })
export default router
