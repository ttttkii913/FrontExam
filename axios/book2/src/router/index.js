import { createRouter, createWebHistory } from 'vue-router'
import BookListView from '../views/BookListView.vue'
import BookEditView from '../views/BookEditView.vue'
import BookCreateView from '../views/BookCreateView.vue'
import CategoryCreateView from '../views/CategoryCreateView.vue'
import CategoryListView from '@/views/CategoryListView.vue'
import CategoryEditView from '@/views/CategoryEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BookListView',
      component: BookListView
    },
    {
      path: '/edit/:id',
      name: 'BookEditView',
      component: BookEditView
    },
    {
      path: '/create',
      name: 'BookCreateView',
      component: BookCreateView
    },
    {
      path: '/category/create',
      name: 'CategoryCreateView',
      component: CategoryCreateView
    },
    {
      path: '/category',
      name: 'CategoryListView',
      component: CategoryListView
    },
    {
      path: '/category/edit/:id',
      name: 'CategoryEditView',
      component: CategoryEditView
    },
  ],
})

export default router
