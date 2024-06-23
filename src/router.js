import { createWebHistory, createRouter } from 'vue-router'

import ChatsView from './views/ChatsView.vue'
import ChatView from './views/ChatView.vue'

const routes = [
  { path: '/', component: ChatsView },
  { path: '/chat/:id', component: ChatView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router