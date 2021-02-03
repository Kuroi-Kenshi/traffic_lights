import Vue from 'vue'
import Router from 'vue-router'

 import Lights from './components/Lights'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/red',
      name: 'RedLight',
      component: Lights,
    },
    {
      path: '/yellow',
      name: 'YellowLight',
      component: Lights
    },
    {
      path: '/green',
      name: 'GreenLight',
      component: Lights
    },
    { 
      path: '*', 
      redirect: '/red' 
    }
  ]
})

export default router;