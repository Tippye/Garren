'use strict'

const name = 'Garren'

//当前是否处于开发模式
const Dev = true

//登录页的背景样式，现有['default','randomImage]
const login_background = 'randomImage'
// const login_background = 'default'

const devConfig = Dev ? {
    server: 'http://api.tippy.icu', token: ''
} : {
    server: 'http://api.tippy.icu', token: ''
}

export default {
    ...devConfig, name, version: '1.0.0', login_background
}