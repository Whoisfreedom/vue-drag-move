import Vue from 'vue'
import App from './App.vue'
import vueDragMove from './lib/index.js'

Vue.use(vueDragMove)

new Vue({
  el: '#app',
  render: h => h(App)
})
