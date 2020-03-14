import Vue from 'vue' // Импортируем Vue и Views
import Router from 'vue-router'
import Red from '../views/Red.vue'
import Yellow from '../views/Yellow.vue'
import Green from '../views/Green.vue'

Vue.use(Router)

export default new Router({ // Настраиваем Роутинг
  mode: 'history',
  routes: [{
      path: '/',
      name: 'main',
      component: Red
    },
    {
      path: '/red',
      name: 'red',
      component: Red
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: Yellow
    },
    {
      path: '/green',
      name: 'green',
      component: Green
    }
  ]
})
