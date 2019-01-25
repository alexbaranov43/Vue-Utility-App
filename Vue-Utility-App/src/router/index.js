import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import todo from '@/components/todolist'
import calculator from '@/components/calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    }
  ]
})
