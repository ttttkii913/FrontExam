import { createRouter, createWebHistory } from 'vue-router'
import Exam1View from '../views/Exam1View.vue'
import Exam2View from '../views/Exam2View.vue'
import Exam3View from '../views/Exam3View.vue'

const routes = [
  {
    path: '/one',
    name: 'Exam1View',
    component: Exam1View
  },
  {
    path: '/two',
    name: 'Exam2View',
    component: Exam2View
  },
  {
    path: '/three',
    name: 'Exam3View',
    component: Exam3View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
