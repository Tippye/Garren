import Cookie from 'js-cookie'
// import {useTheme} from "@/utils/themes";

const DEFAULT_THEME = 'default'

const state = {
    //显示设置页
    showSettings: false,
    //站点标题
    site_title: Cookie.get('site_title') || '',
    //favicon地址
    site_fav: Cookie.get('site_fav') || './favicon.ico',
    //站点描述
    site_desc: Cookie.get('site_desc') | '',
    //站点管检测
    site_keywords: Cookie.get('site_keywords') | '',
    //站点头像
    site_avatar: Cookie.get('site_avatar') || 'http://api.tippy.icu/storage/users/uid-1/my-head.png',
    //备案信息
    record_info: Cookie.get('record_info') || '',
    //工信部地址
    record_url: Cookie.get('record_url') || 'https://beian.miit.gov.cn',
    //主题
    site_theme: Cookie.get('site_theme') || DEFAULT_THEME,
    //夜间模式
    darkMode: false,
    //站点语言
    lang: Cookie.get('lang') || 'zh',
    //首页文字
    home_text: true,
    //首页第三方链接
    webmaster: Cookie.get('webmaster') ? JSON.parse(Cookie.get('webmaster')) : {}
}

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
            Cookie.set(key, value)
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
        value ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        console.log('toggleDarkMode')
        commit('CHANGE_SETTING', {key: 'darkMode', value})
    },
    /**
     * 更改站点语言
     *
     * @param commit
     * @param state
     * @param lang      'zh'|'en'
     */
    changeLanguage({commit, state}, lang = 'zh') {
        return new Promise(resolve => {
            commit('CHANGE_SETTING', {key: 'lang', value: lang})
            resolve(state.lang)
        })
    },
}

export default {
    namespaced: true, state, mutations, actions
}