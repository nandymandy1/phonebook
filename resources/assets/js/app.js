// This is bootstrap.js file which load on the runtimefor the first time
require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

let Home = require('./components/Home.vue');
let About = require('./components/About.vue');


// Routes using router
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component:About }
]

const router = new VueRouter({
  // To remove the # from the router links or URL's
  // mode: 'history',
  routes
})


const app = new Vue({
    el: '#app',
    router,
    components:{
      Myheader,
      Myfooter
    }
});
