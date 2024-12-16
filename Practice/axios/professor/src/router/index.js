import { createRouter, createWebHistory } from 'vue-router'
import ProfessorListView from '../views/ProfessorListView.vue'
import ProfessorEditView from '../views/ProfessorEditView.vue'
import ProfessorCreateView from '../views/ProfessorCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProfessorListView',
      component: ProfessorListView
    },
    {
      path: '/edit/:id',
      name: 'ProfessorEditView',
      component: ProfessorEditView
    },
    {
      path: '/create',
      name: 'ProfessorCreateView',
      component: ProfessorCreateView
    },
  ],
})

export default router
