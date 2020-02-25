import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Chris from './components/body/SmellySocks'



Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  {
    name: 'chris',
    path: '/chris',
    component: Chris
  }
];



const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



