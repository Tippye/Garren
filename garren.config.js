'use strict'

const name = 'Garren'

//当前是否处于开发模式
const Dev = true

//登录页的背景样式，现有['default','randomImage]
const login_background = 'randomImage'
// const login_background = 'default'

//图片家在错误时占位图
const img_load_err = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

const devConfig = Dev ? {
    server: 'http://api.tippy.icu', token: ''
} : {
    server: 'http://api.tippy.icu', token: ''
}

export default {
    ...devConfig, name, version: '1.0.0', login_background, img_load_err
}