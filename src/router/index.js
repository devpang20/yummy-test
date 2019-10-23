import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import yummyList from '../components/yummyList.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: App},
        { path: '/list', component: yummyList},
    ]
})

export default  router