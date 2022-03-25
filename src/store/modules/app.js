import Cookie from 'js-cookie'
import {login as _login} from "@/api/user";
import _User from "@/entity/User";
import {setToken} from "@/utils/auth";

const state = {
    //侧边栏
    sidebar: {
        // 侧边栏开关状态
        opened: Cookie.get('sidebarStatus') ? !!+Cookie.get('sidebarStatus') : true,
        // 侧边栏开启/关闭是否伴随动画
        withoutAnimation: false,
        notice: null
    },
    //登录设备：web | desktop | android | ios
    device: 'web',
    //当前登录用户
    user: Cookie.get('user') || null
}

const mutations = {
    TOGGLE_SIDEBAR: (state) => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        Cookie.set('sidebarStatus', state.sidebar.opened ? 1 : 0)
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
        Cookie.set('sidebarStatus', 0)
    },
    TOGGLE_DEVICE: (state, decive) => {
        state.device = decive
    },
    SET_USER: (state, user) => {
        state.user = user
        Cookie.set('user', user)
    }
}

const actions = {
    toggleSidebar({commit}) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSidebar({commit}, {withoutAnimation}) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({commit}, {device}) {
        commit('TOGGLE_DEVICE', device)
    },
    /**
     * 登录，将用户数据保存到store
     * @param commit
     * @param value
     * @returns {Promise<unknown>}
     */
    login({commit}, value) {
        return new Promise((resolve, reject) => {
            _login(value)
                .then(res => {
                    if (res['login-token']) {
                        setToken(res['login-token'])
                        let user = new _User(res.user)
                        commit("SET_USER", user)
                        resolve(user)
                        return
                    }
                    reject()
                })
                .catch(e => reject(e))
        })
    }
}

export default {
    namespaced: true, state, mutations, actions
}