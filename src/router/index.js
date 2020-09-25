import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Component
// import HomePage from '../components/HomePage.vue'
import UserPage from '../components/User.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: "/user/:id",
  name: "User",
  component: UserPage
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router