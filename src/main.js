import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
// IMPORTANDO COMPONENTES
import Topo from '@/components/Topo'
import Produtos from '@/components/Produtos'
import Sobre from '@/components/Sobre'
import Carreira from '@/components/Carreira'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
// CRIANDO TAGS PERSONALIZADAS PARA COMPONENTS 
Vue.component('app-topo', Topo)
Vue.component('app-produto', Produtos)
Vue.component('app-sobre', Sobre)
Vue.component('app-carreira', Carreira)
Vue.component('app-contato', Contato)
Vue.component('app-footer', Footer)

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
