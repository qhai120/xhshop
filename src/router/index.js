import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexPage from '../views/pageView/IndexPage.vue'
import GoodsPage from '../views/pageView/GoodsPage.vue'
import CarPage from '../views/pageView/CarPage.vue'
import MyPage from '../views/pageView/MyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '', redirect: 'index'
      },
      {
        path: 'index',
        component: IndexPage
      }, {
        path: 'goods/:id',
        component: GoodsPage,
        props: true
      }, {
        path: 'car',
        component: CarPage,
        meta: { a: 3 }
      }, {
        path: 'my',
        component: MyPage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
