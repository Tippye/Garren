import {createRouter as _createRouter, createWebHistory} from "vue-router";
import Layout from "@/layout/index.vue";
import {getToken} from "@/utils/auth";
import NProgress from "nprogress";
import Home from "@/pages/base-pages/Home.vue"
import Article from "@/pages/base-pages/Article.vue";
import About from "@/pages/base-pages/About.vue";
import Links from "@/pages/base-pages/Links.vue";

/**
 * 创建路由组件
 * @returns
 */
function createRouter() {
    let routes = makeDynamicRoutes()
    routes.push(...makeConstantRoutes())
    return _createRouter({
        history: createWebHistory('/'),
        routes
    })
}

/**
 * 创建动态路由
 *
 * base-pages目录下默认使用Layout
 * 其他目录不使用
 * 首页默认为base-pages/home.vue
 *
 * @returns {Object}
 */
function makeDynamicRoutes() {
    const customPages = import.meta.glob('../pages/custom-pages/**/*.vue')

    return Object.keys(customPages).map(path => {
        const name = path.match(/\/pages\/custom-pages(.*)\.vue$/)[1].toLowerCase()
        return {
            path: name,
            name,
            component: customPages[path]
        }
    })
}

/**
 * 静态路由
 * @returns {Object}
 */
function makeConstantRoutes() {
    return [
        {path: '/404', name: 'Error404', component: () => import('@/pages/error/404.vue')},
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: "NotFound"
        },
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/article/:articleId',
                    name: 'article',
                    component: Article
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About
                },
                {
                    path: '/links',
                    name: 'links',
                    component: Links
                }
            ]
        }
    ]
}

let router = createRouter()

//免登录页面白名单
const whiteList = ['', 'article', 'about', 'login', 'register', '404']

/**
 * 导航守卫,可在此配置权限
 *
 * @Doc: https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
 */
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (whiteList.indexOf(to.path.split('/')[0]) > -1 || getToken()) next()
    else {
        let a = []
        router.getRoutes().forEach(r => to.path.split('/')[0] === r.path.split('/')[0] && a.push(r.path));
        if (a.length < 1 || a[0] === '/404') next({path: '/404'})
        next({path: '/login'})
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router