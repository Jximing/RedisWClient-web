import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Routers from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(ElementUI);

const RouterConfig = {
  mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
    router:router,
  render: h => h(App)
});
