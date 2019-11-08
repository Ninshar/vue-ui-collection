import Vue from 'vue'
import App from './App.vue'


// import collection from '../index.js'
import collection from '../dist/vue-ui-collection.umd.min.js'
import '../dist/vue-ui-collection.css';

Vue.use(collection);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
