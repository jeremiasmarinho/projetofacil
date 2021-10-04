import Vue from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap'
import VueRouter from 'vue-router'
import pagina1 from './components/pagina1.vue';
import pagina2 from './components/pagina2.vue';
import pagina3 from './components/pagina3.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path: '/pagina1',
    component: pagina1
    },
    {
      path: '/',
      redirect: '/pagina1'
    },
    {
      path: '/pagina2',
      component: pagina2
     },
     {
      path: '/pagina3',
      component: pagina3
     
     }
  ]
})

Vue.config.productionTip = false

Vue.use(bootstrap);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
