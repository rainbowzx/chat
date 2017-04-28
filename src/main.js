import './assets/css/reset.css'
import 'lib-flexible'
import FastClick from 'fastclick'
window.FastClick = FastClick
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import routerConfig from './routers'
import Mint from 'mint-ui'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Mint)

VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(VueRouter)
const router=new VueRouter(routerConfig);
new Vue({
  el: '#app',
  router,
  template:'<App/>',
  components: { App }
})
