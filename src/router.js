import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homeLayout',
      component: () => import('./layout/authorized.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./pages/Home.vue'),
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
          path:'/competition/add-people',
          name:'add people',
          component:()=>import('./components/competition/people/AddPeople.vue')
        },
        {
          path:'/competition/teams',
          name:'teams',
          component:()=>import('./components/competition/teams/Teams.vue')
        },
        {
          path:'/competition/audit-events',
          name:'audit-events',
          component:()=>import('./pages/Competition/AuditEvents.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Auth.vue')
    }
  ]
})
