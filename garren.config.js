'use strict'

const name = 'Garren'

//当前是否处于开发模式
const Dev = true

const devConfig = Dev ? {
    server: 'http://api.tippy.icu', token: ''
} : {
    server: 'http://api.tippy.icu', token: ''
}

export default {
    ...devConfig, name, version: '1.0.0'
}