//imports always go at the top
import LogInPage from './modules/LogInPage.js';
import ChatPage from './modules/ChatPage.js';
import ErrorPage from './modules/ErrorPage.js';




const { createApp } = Vue;
//import tthe create  method from theVue libraray
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        //the vue router will try to match these routes
        //this is what you put in the location bar in the browser
        //when you get a match, vue will render the specified component
        //into the router-view 
        {   path: '/', //browser location bar looks like this
            name: 'login', //for programmatic navagation
            component: LogInPage //for render
        }, //copy line 2
        {   path: '/home', 
            name: 'home', 
            component: ChatPage
         },//copy line 3
         // put a chatch-all for broken routes at the very bottome of your routes stack
         // if Vue Router cannot mathc a given router, it will display a generic error component
         {
            path: '/:pathMatch(.*)*', //* means anything  http://localhost:52330/index.html#/about   type about it shows That page doesn't exist!
            name: 'error', 
            component: ErrorPage
         }
    ]
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({

    
    methods: {
        tryRouterPush(){
            //programmatic routing
            this.$router.push ({
                name:'home'
            })
            
            
        },

        dispatchMessage() {
            socket.emit('chat_message', {
                content: this.message,
                name: this.nickname || 'anonymous',
                id: this.socketID
            })

            this.message = "";}




    }
  })
   
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  app.mount('#app')
  