console.log('router/index.js')
import { createRouter, createWebHashHistory, Route } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import DefaultLayoutStandAlone from '@/standalone/layouts/DefaultLayoutStandAlone'
import Home from '@/views/HeroPage.vue'
import Login from '@/views/LoginPage.vue'
/*define const other in here*/
const getUserIdFromLocalStorage = () => {
  return localStorage.getItem('userId');
};

console.log(process.env.VUE_APP_STANDALONE_SINGLE_SPA)
const routes = [


  {
    path: '/',
    name: 'login',
    component: Login,
    
    
  },
  
  {
    path: '/home/:id',
    name: 'home',
    component: Home,
    
  }
  

  // !Login
  // {
  //   path: '/app/login',
  //   name: 'login',
  //   component: () => import('@/views/LoginPage.vue'),
  //   meta: { layout: 'displayRTSC' },
  // },

  

,
  // !HTTP Status
  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/pages/Page404'),
  },
  {
    path: '/500',
    name: 'Page500',
    component: () => import('@/views/pages/Page500'),
  },
  



  
  
  // {
  //   // cara ke-1
  //   path: '/rtsc',
  //   name: 'dashboard',
  
  
  //         component: () => import('@/views/Dashboard.vue'),
  //         meta: { layout: 'displayRTSC' },
  // },

  
  //!Real Time Stock Management
  {
    path: '/system/rtsc',
    name: 'Home',
    component:
    process.env.VUE_APP_STANDALONE_SINGLE_SPA === 'true'
    ? DefaultLayoutStandAlone
        : DefaultLayout,
    redirect:
      process.env.VUE_APP_STANDALONE_SINGLE_SPA !== 'true' &&
      (!localStorage.id_token || localStorage.id_token == '')
        ? () => {
            window.location.href = process.env.dc + '/#/sc/login'
            // return '/redirectingToLogin' // not important since redirecting
          }
        : '/app/dashboard',
    children: [
      {
        path: '/app/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Dashboard.vue'),
        meta: { layout: 'displayRTSC' },
      },
      {
        path: '/app/summary',
        name: 'Summary',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Summary.vue'),
        meta: { layout: 'displayRTSC' },
      },
      {
        path: '/app/unpacking',
        name: 'Unpacking',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Unpacking.vue'),
        meta: { layout: 'displayRTSC' },
      },
    ],
  },

  {
    path: '/app/andon/sps',
    name: 'master',
    component: () => import('@/components/RTSC/SPSv2.vue'),
    meta: { layout: 'displayRTSC' },
  },
  {
    path: '/app/andon/pline',
    name: 'pline',
    component: () => import('@/components/RTSC/PLine.vue'),
    meta: { layout: 'displayRTSC' },
  },
  {
    path: '/app/andon/importpart',
    name: 'importpart',
    component: () => import('@/components/RTSC/ImportPart.vue'),
    meta: { layout: 'displayRTSC' },
  },
  {
    path: '/app/andon/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { layout: 'displayRTSC' },
  },


]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
