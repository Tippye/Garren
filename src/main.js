import {createApp} from 'vue'
import App from './App.vue'
import './styles/index.scss';
import ElementPlus from 'element-plus'
import router from "@/router";
import store from "@/store"
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en"
import {$t, i18n} from "@/language";

let locale
//控制 element-plus 组件语言
if (i18n.global.fallbackLocale === 'en') {
    locale = en;
} else {
    locale = zhCn;
}

createApp(App).use(ElementPlus, {locale}).use(router).use(store).provide('$t', $t).mount('#app')