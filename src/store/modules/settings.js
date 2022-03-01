import Cookies from 'js-cookies'
import defaultThemeCluster from 'element-plus/theme-chalk/index.css'
import {getThemeCluster, updateStyle} from "@/utils/themes";

const DEFAULT_THEME = '#409EFF'

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
    site_avatar: Cookies.getItem('site_avatar') || '',
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
    //更改夜间模式
    toggleDarkMode({commit}, {value}) {
        // let theme = getThemes();
        // let attribute = ''
        // if (theme[value ? 'dark' : 'light'].systemThemeColor) {
        //     attribute += `--systemThemeColor: ${theme[value ? 'dark' : 'light'].systemThemeColor};`
        //     let result = lighten(theme[value ? 'dark' : 'light'].systemThemeColor, 58)
        //     attribute += `--systemThemeColorActive: ${result};`
        // }
        // toggleClass({
        //     flag: value,
        //     cls: 'dark-mode'
        // })
        // commit('CHANGE_SETTING', {key: 'darkMode', value})
        // document.querySelector(':root').setAttribute('style', attribute)
    },
    async changeThemes({commit, state}, {val}) {
        let chalk = ''
        const oldVal = chalk ? state.site_theme : DEFAULT_THEME
        if (typeof val !== 'string') return
        const themeCluster = getThemeCluster(val.replace('#', ''))
        const originalCluster = getThemeCluster(oldVal.replace('#', ''))

        const getHandler = (variable, id) => {
            return () => {
                const originalCluster = getThemeCluster(DEFAULT_THEME.replace('#', ''))
                const newStyle = updateStyle(variable, originalCluster, themeCluster)

                let styleTag = document.getElementById(id)
                if (!styleTag) {
                    styleTag = document.createElement('style')
                    styleTag.setAttribute('id', id)
                    document.head.appendChild(styleTag)
                }
                styleTag.innerText = newStyle
            }
        }

        if (!chalk) chalk = defaultThemeCluster

        const chalkHandler = getHandler(chalk, 'chalk-style')

        chalkHandler()

        const styles = [].slice.call(document.querySelectorAll('style'))
            .filter(style => {
                const text = style.innerText
                return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
            })
        styles.forEach(style => {
            const {innerText} = style
            if (typeof innerText !== 'string') return
            style.innerText = updateStyle(innerText, originalCluster, themeCluster)
        })
    },
}

export default {
    namespaced: true, state, mutations, actions
}