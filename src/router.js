import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lookup from './views/Lookup.vue'
import PartsView from './views/PartsView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	{
	  path: '/lookup',
	  name: 'lookup',
	  component: Lookup
	},
	{
	  path: '/parts',
	  name: 'parts',
	  component: PartsView
	},
	  {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  // to remove hash # from url add following property
  mode: 'history' // now page urls available at localhost:8080/ without hash
})
