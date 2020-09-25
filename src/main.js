import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// componen page
import router from './router'

// Vue.config.productionTip = false

// Vue.use(Router)

// export default new Router({
//   routes: [{
//     path: '/',
//     name: 'Home',
//     component: HomePage
//   }, {
//     path: "/user/:id",
//     name: "User",
//     component: UserPage
//   }]
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')