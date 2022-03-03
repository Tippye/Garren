import {createI18n} from 'vue-i18n'
import zhCn from "./zh-cn";
import en from "./en"
import Cookie from "js-cookies";

export const i18n = createI18n({
    locale: Cookie.getItem('lang') || 'zh',        //默认显示的语言
    messages: {
        zh: zhCn,    //引入语言文件
        en: en
    }
})

export function $t(args) {
    return i18n.global.tc(args)
}