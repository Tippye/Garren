import {createApp} from 'vue'
import App from './App.vue'
import './styles/index.scss';
import ElementPlus from 'element-plus'
import router from "@/router";
import store from "@/store"
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en"
import {$t, i18n} from "@/language";
import 'nprogress/nprogress.css'

//监听系统深色模式的切换
store.dispatch("settings/toggleDarkMode", {value: window.matchMedia('(prefers-color-scheme: dark)').matches})
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches: isDark}) => {
        store.dispatch("settings/toggleDarkMode", {value: isDark})
    })

let locale
//控制 element-plus 组件语言
if (i18n.global.fallbackLocale === 'en') {
    locale = en;
    document.querySelector("html").setAttribute('lang', 'en')
} else {
    locale = zhCn;
    document.querySelector("html").setAttribute('lang', 'zh')
}

createApp(App).use(ElementPlus, {locale}).use(router).use(store).provide('$t', $t).mount('#app')