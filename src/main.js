import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'     //  Импортируем Роутинг по страницам
import './assets/styles/styles.scss'        //  Импортируем Глобальные стили

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
