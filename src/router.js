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
      path:'/competition/import',
      name:'import',
      component:()=>import('./components/competition/ImportForm.vue')
    },
    {
      path:'/competition/export',
      name:'export',
      component:()=>import('./components/competition/ExportForm.vue')
    },
    {
      path:'/competition/skills',
      name:'skills',
      component:()=>import('./components/competition/SkillsForm.vue')
    },
    {
      path:'/competition/people',
      name:'people',
      component:()=>import('./pages/Competition/People.vue')
    },
    {
      path:'/competition/teams',
      name:'teams',
      component:()=>import('./components/competition/team/Teams.vue')
    }
  ]
})
