import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'graphite',
        component: ()=>import('../views/graphite.vue')
    }
]

const router=new VueRouter({
    //ES6简写，等于routes：routes
        routes
    });
export default router
