import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import WishList from '../views/WishList.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DetailProduct from '../views/DetailProduct.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detail/:id',
      name: 'detailProduct',
      component: DetailProduct
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.path === '/wishlist') return next('/login')
  else if (localStorage.access_token && to.path === '/login' || localStorage.access_token && to.path === '/register') return next('/')
  else return next()
})

export default router
