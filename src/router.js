import Vue from 'vue'
import Router from 'vue-router'

import RedLight from './components/pages/RedLight'
import YellowLight from './components/pages/YellowLight'
import GreenLight from './components/pages/GreenLight'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/red',
      name: 'RedLight',
      component: RedLight,
    },
    {
      path: '/yellow',
      name: 'YellowLight',
      component: YellowLight
    },
    {
      path: '/green',
      name: 'GreenLight',
      component: GreenLight
    },
    { 
      path: '*', 
      redirect: '/red' 
    }
  ]
})

export default router;