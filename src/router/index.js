
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/pages/Home'),
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import(/* webpackChunkName: "plans" */ '../views/pages/Plans'),
  },
  {
    path: '/workstation',
    name: 'Workstation',
    component: () => import(/* webpackChunkName: "workstation" */ '../views/pages/Workstation'),
  },
  {
    path: '/event-zone',
    name: 'EventZone',
    component: () => import(/* webpackChunkName: "event-zone" */ '../views/pages/EventZone'),
  },
  {
    path: '/napa-kids',
    name: 'Kids',
    component: () => import(/* webpackChunkName: "napa-kids" */ '../views/pages/Kids'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title ? to.meta.title : 'Добро пожаловать!';
  document.title = `${title} - Napa.team`;
  next();
});

export default router;
