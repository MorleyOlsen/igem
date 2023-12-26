import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from './router'



const router = createRouter({
    history: createWebHistory('/cau-china/'),
    routes: routes
})

router.beforeEach((to, from, next) => {
        window.scrollTo(0, 0);
        next();
    });
createApp(App).use(router).mount('#app')
