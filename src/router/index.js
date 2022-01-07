import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/graphite',
        name: 'graphite',
        component: ()=>import('../views/graphite.vue')
    },
    {
        path: '/',
        name: 'photo',
        component: ()=>import('../views/photo.vue')
    }
]

const router=new VueRouter({
    //ES6简写，等于routes：routes
        routes
    });
export default router
