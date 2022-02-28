import Cookies from 'js-cookies'

const state = {
    //侧边栏
    sidebar: {
        // 侧边栏开关状态
        opened: Cookies.getItem('sidebarStatus') ? !!+Cookies.getItem('sidebarStatus') : true,
        // 侧边栏开启/关闭是否伴随动画
        withoutAnimation: false
    },
    //登录设备：web | desktop | android | ios
    device: 'web'
}

const mutations = {
    TOGGLE_SIDEBAR: (state) => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        Cookies.setItem('sidebarStatus', state.sidebar.opened ? 1 : 0)
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
        Cookies.setItem('sidebarStatus', 0)
    },
    TOGGLE_DEVICE: (state, decive) => {
        state.device = decive
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
}

export default {
    namespaced: true, state, mutations, actions
}