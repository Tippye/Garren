import Cookies from 'js-cookies'

const state = {
    //站点标题
    site_title: Cookies.getItem('site_title') || '',
    //favicon地址
    site_fav: Cookies.getItem('site_fav') || './favicon.ico',
    //站点描述
    site_desc: Cookies.getItem('site_desc') | '',
    //站点头像
    site_avatar: Cookies.getItem('site_avatar') || '',
    //备案信息
    record_info: Cookies.getItem('record_info') || '',
    //工信部地址
    record_url: Cookies.getItem('record_url') || 'https://beian.miit.gov.cn'
}

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
            Cookies.setItem(key, value)
        }
    }
}

const actions = {
    //修改网站设置
    changeSetting({commit}, data) {
        commit('CHANGE_SETTING', data)
    }
}

export default {
    namespaced: true, state, mutations, actions
}