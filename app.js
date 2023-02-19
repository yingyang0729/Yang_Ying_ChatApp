import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './LoginPage.vue'
import ChatPage from './ChatPage.vue'
import io from 'socket.io-client'

Vue.use(VueRouter)

const socket = io()

const routes = [
  { path: '/', component: LoginPage },
  { path: '/chat', component: ChatPage },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  data: {
    username: '',
    messages: []
  },
  methods: {
    login() {
      if (this.username !== '') {
        socket.emit('login', this.username)
        this.$router.push('/chat')
      }
    },
    sendMessage(message) {
      socket.emit('message', message)
    }
  }
})

socket.on('message', (message) => {
  app.messages.push(message)
})

app.$mount('#app')
