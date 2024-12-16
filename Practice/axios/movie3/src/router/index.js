import { createRouter, createWebHistory } from 'vue-router'
import MovieListView from '../views/MovieListView.vue'
import MovieEditView from '../views/MovieEditView.vue'
import MovieCreateView from '../views/MovieCreateView.vue'
import GenreListView from '../views/GenreListView.vue'
import GenreCreateView from '../views/GenreCreateView.vue'
import GenreEditView from '../views/GenreEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MovieListView',
      component: MovieListView
    },
    {
      path: '/edit/:id',
      name: 'MovieEditView',
      component: MovieEditView
    },
    {
      path: '/create',
      name: 'MovieCreateView',
      component: MovieCreateView
    },
    {
      path: '/genre',
      name: 'GenreListView',
      component: GenreListView
    },
    {
      path: '/genre/create',
      name: 'GenreCreateView',
      component: GenreCreateView
    },
    {
      path: '/edit/genre/:id',
      name: 'GenreEditView',
      component: GenreEditView
    },
  ],
})

export default router
