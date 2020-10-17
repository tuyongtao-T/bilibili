import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import Login from '@/views/Login'
import userinfo from "@/views/userinfo";
import edit from '@/views/edit'
import Home from '@/views/Home'
import Article from "@/views/Article";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: register
    },
    {
        path: '/home',
        component: Home,
        meta: {
            keepalive: true,
        }
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/userinfo',
        component: userinfo,
        meta: {
            isToken: true,
        }
    },
    {
        path: '/edit',
        component: edit,
        meta: {
            isToken: true,
        }
    },
    {
        path: '/article/:id',
        component: Article
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.isToken === true) {
        router.push('/login');
        Vue.prototype.$msg.fail('请重新登录')
        return;
    }
    next()
    //console.log(to);
    //router.push('/login')
})

export default router
