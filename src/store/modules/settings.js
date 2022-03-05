import Cookies from 'js-cookies'
import {useTheme} from "@/utils/themes";

const DEFAULT_THEME = 'default'

const state = {
    //显示设置页
    showSettings: false,
    //站点标题
    site_title: Cookies.getItem('site_title') || '',
    //favicon地址
    site_fav: Cookies.getItem('site_fav') || './favicon.ico',
    //站点描述
    site_desc: Cookies.getItem('site_desc') | '',
    //站点头像
    site_avatar: Cookies.getItem('site_avatar') || 'http://api.tippy.icu/storage/users/uid-1/my-head.png',
    //备案信息
    record_info: Cookies.getItem('record_info') || '',
    //工信部地址
    record_url: Cookies.getItem('record_url') || 'https://beian.miit.gov.cn',
    //主题
    site_theme: Cookies.getItem('site_theme') || DEFAULT_THEME,
    //夜间模式
    darkMode: false
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
    },
    /**
     * 更改夜间模式
     *
     * @param commit
     * @param value{Boolean} true:夜间模式|false:默认主题
     * @return {Promise<void>}
     */
    async toggleDarkMode({commit}, {value}) {
        useTheme(value ? 'dark' : state.site_theme)
            .then(() => {
                commit('CHANGE_SETTING', {key: 'darkMode', value})
            })
    }
}

export default {
    namespaced: true, state, mutations, actions
}