import Vue from 'vue'
import App from './App.vue'

import {
  Dialog,
  Button,
  Upload,
  MessageBox,
} from 'element-ui';
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Upload);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
