import Vue from 'vue'
import App from './App.vue'


import dialogUpload from '../index.js'

Vue.use(dialogUpload);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
