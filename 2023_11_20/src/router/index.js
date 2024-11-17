import { createRouter, createWebHistory } from 'vue-router'
import Exam1View from '../views/Exam1View.vue'
import Exam2View from '../views/Exam2View.vue'
import Exam3View from '../views/Exam3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/exam1',
      name: 'exam1',
      component: Exam1View
    },
    {
      path: '/exam2',
      name: 'exam2',
      component: Exam2View
    },
    {
      path: '/exam3',
      name: 'exam3',
      component: Exam3View
    }
  ]
})

export default router
