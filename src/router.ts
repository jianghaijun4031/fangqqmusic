import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      redirect: to => {
        return "/recommend"
      },
      name: 'home',
      component: Home,
      children:[
        {
          path:'recommend',
          component: () => import('./views/home/Recommend.vue')
        },
        {
          path:'range',
          component: () => import('./views/home/Range.vue')
        },
        {
          path:'search',
          component: () => import('./views/home/Search.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
