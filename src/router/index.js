import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ChatView from '../views/ChatView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NoAccessView from '../views/NoAccessView.vue'
import Conversation from '../components/Conversation.vue'

import { auth } from '../firebase/index'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
    },
    {
      path: '/',
      name: 'ChatView',
      component: ChatView,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'conversation/:roomId',
          name: 'Conversation',
          component: Conversation,
          props: true,
        },
      ],
    },
    {
      path: '/no-access-view',
      name: 'NoAccessView',
      component: NoAccessView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: NotFoundView,
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && from.path === '/login' && auth.currentUser) {
    next('/')
    return
  }
  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next('/no-access-view')
    return
  }
  next()
})

export default router
