import { createRouter, createWebHistory } from 'vue-router'
import BookListView from '../views/BookListView.vue'
import BookEditView from '../views/BookEditView.vue'
import BookCreateView from '../views/BookCreateView.vue'
import CounterStoreView from '../views/CounterView.vue'
import CounterParentView from '../views/CounterParentView.vue'

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
      path: '/counter',
      name: 'CounterStoreView',
      component: CounterStoreView
    },
    {
      path: '/counter_2306',
      name: 'CounterParentView.vue',
      component: CounterParentView
    },

  ],
})

export default router
