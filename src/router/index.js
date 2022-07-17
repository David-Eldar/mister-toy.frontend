import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import toyApp from '../views/toy-app.vue'
import about from '../views/about.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import dashboardPage from "../views/dashboard-page.vue"
import chat from './views/chat.vue'
import reviewApp from './views/review-app.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },

    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/toy/:id',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:id?',
      name: 'toy-edit',
      component: toyEdit,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboardPage,
    },
    {
      path: '/review',
      name: 'review',
      component: reviewApp
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/login',
      name: 'loginSignup',
      component: loginSignup
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: userDetails
    }
  ]
})

export default router
