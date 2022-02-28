import {createRouter as _createRouter, createWebHistory} from "vue-router";
import Layout from "@/layout/index.vue";

/**
 * 创建路由组件
 * @returns
 */
function createRouter() {
    let routes = makeDynamicRoutes()
    routes.push(...makeConstantRoutes())
    return _createRouter({
        history: createWebHistory('/garren/'),
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
    const basePages = import.meta.glob('../pages/base-pages/**/*.vue')
    const customPages = import.meta.glob('../pages/custom-pages/**/*.vue')
    let routes = [{
        path: '/',
        name: 'layout',
        component: Layout,
        children: []
    }]

    routes[0].children.push(...Object.keys(basePages).map(path => {
        const name = path.match(/\/pages\/base-pages(.*)\.vue$/)[1].toLowerCase()
        return {
            path: name === '/home' ? '' : name,
            name,
            component: basePages[path]
        }
    }))

    routes.unshift(...Object.keys(customPages).map(path => {
        const name = path.match(/\/pages\/custom-pages(.*)\.vue$/)[1].toLowerCase()
        return {
            path: name,
            name,
            component: customPages[path]
        }
    }))

    return routes
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
        }
    ]
}

let router = createRouter()

/**
 * 获取Token
 * TODO：实现登录后删除此方法
 * @returns {boolean}
 */
function getToken() {
    return true
}

//免登录页面白名单
const whiteList = ['/', '/about', '/login', 'register']

/**
 * 导航守卫,可在此配置权限
 *
 * @Doc: https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
 */
router.beforeEach((to, from, next) => {
    //TODO：进度条开始加载
    if (getToken()) {
        // to.meta.title && store.dispatch('settings/setTitle',to.meta.title)

        if (to.path === '/login') {
            //已经登录的瞎凑什么热闹
            next({path: '/'})
            //TODO：进度条完成
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next({path: '/login'})
            //TODO: 进度条完成
        }
    }
});

router.afterEach(() => {
    //TODO: 进度条完成
})

export default router