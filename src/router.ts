import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta:{
        requiresAuth:true
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/private/home.vue'),
        },
        {
          path: '/new-item',
          name: 'new-item',
          component: () => import('./views/private/Item.vue'),
        },
      ]
    },  
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/public/login.vue')    
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/public/signup.vue')    
    }, 
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: () => import('./views/public/resetPassword.vue')    
    },
  ]
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return {
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      }
    }
  }
})

export default router
