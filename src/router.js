import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Auth.vue')
    },
    {
      path:'/import',
      name:'import',
      component:()=>import('./components/competition/ImportForm.vue')
    },
    {
      path:'/export',
      name:'export',
      component:()=>import('./components/competition/ExportForm.vue')
    },
    {
      path:'/skills',
      name:'skills',
      component:()=>import('./components/competition/SkillsForm.vue')
    }
  ]
})
