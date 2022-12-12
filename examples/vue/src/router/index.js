import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/posters/:id',
      name: 'single-poster',
      component: () => import('../views/SinglePosterView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if(document.startViewTransition){
      await document.startViewTransition(next())
  } else {
    next()
  }
});

export default router;
