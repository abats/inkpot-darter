import Vue from 'vue';
import Router from 'vue-router';
import Darts301 from './views/Darts301.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/darts301',
      name: 'darts301',
      component: Darts301,
    },
    {
      path: '/cricket',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
