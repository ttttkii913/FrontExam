import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductEditView from '../views/ProductEditView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductListView',
      component: ProductListView
    },
    {
      path: '/edit/:id',
      name: 'ProductEditView',
      component: ProductEditView
    },
    {
      path: '/create',
      name: 'ProductCreateView',
      component: ProductCreateView
    },
  ],
})

export default router
