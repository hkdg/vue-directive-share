import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    redirect: '/index/lazy-img',
    component: () => import('../views/index.vue'),
    children: [
      {
        name: 'lazyImg',
        path: 'lazy-img',
        component: () => import('../views/lazy-img.vue')
      },
      {
        name: 'pre',
        path: 'pre',
        component: () => import('../views/pre.vue')
      },
      {
        name: 'once',
        path: 'once',
        component: () => import('../views/once.vue')
      },
      {
        name: 'other',
        path: 'other',
        component: () => import('../views/other.vue')
      }
    ]
  }
];
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
const router = new VueRouter({
  routes
});
export default router;
