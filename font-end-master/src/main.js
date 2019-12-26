import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import api from './api/http'
import Comment from '@/components/Shared/Comment/Comment'
import listComment from '@/components/Shared/Comment/ListComment'
import datetimePicker from '@/views/DatetimePicker'

Vue.use(BootstrapVue)
sync(store, router)
Vue.use(Comment)
Vue.use(listComment)
Vue.use(datetimePicker)

Vue.component(Comment.name, Comment)
Vue.component(listComment.name, listComment)
Vue.component(datetimePicker.name, datetimePicker)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuetify,
  vuetify,
  api,
  render: h => h(App),
}).$mount('#app')
