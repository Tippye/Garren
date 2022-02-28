import {getToken} from "@/utils/auth";

const state = {
    token: getToken(),
    name: '',
    avatar: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    /**
     * TODO:登录
     * @param commit
     * @param userInfo
     * @return {Promise<>}
     */
    Login({commit}, userInfo) {
        return new Promise((resolve, reject) => {

        })
    },

    /**
     * TODO：获取用户信息
     * @param commit
     * @param state
     * @return {Promise<>}
     * @constructor
     */
    GetInfo({commit, state}) {
        return new Promise((resolve, reject) => {

        })
    },

    /**
     * TODO:退出
     * @param commit
     * @param state
     * @return {Promise<unknown>}
     * @constructor
     */
    LogOut({commit, state}) {
        return new Promise((resolve, reject) => {

        })
    }
}

export default {
    namespaced: true, state, mutations, actions
}