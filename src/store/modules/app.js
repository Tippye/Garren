import Cookie from 'js-cookie'

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
    user: null
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