import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/collapse",
      name: "collapse",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Collapse.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/pop",
      name: "pop",
      component: () => import(/* webpackChunkName: "about" */ "./views/Pop.vue")
    },
    {
      path: "/button",
      name: "button",
      component: () => import(/* webpackChunkName: "about" */ "./views/button")
    }
  ]
});
