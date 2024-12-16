import { createRouter, createWebHistory } from 'vue-router'
import DepartmentListView from '../views/DepartmentListView.vue'
import DepartmentEditView from '../views/DepartmentEditView.vue'
import DepartmentCreateView from '../views/DepartmentCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DepartmentListView',
      component: DepartmentListView
    },
    {
      path: '/edit/:id',
      name: 'DepartmentEditView',
      component: DepartmentEditView
    },
    {
      path: '/create',
      name: 'DepartmentCreateView',
      component: DepartmentCreateView
    },
  ],
})

export default router
