import request from "@/utils/request";

const url = '/api/options'

/**
 * 通过该接口，你可以获取到全部的公开配置信息
 * @returns {*}
 */
export function getOptions(key = null) {
    return request({
        url,
        params: {
            key
        }
    })
}

/**
 * 通过该接口，你可以获取到系统内已存在的配置列表
 * 可以根据返回的列表信息，获取对应的配置信息
 * @returns {*}
 */
export function getOptionsList() {
    return request({
        url: url + '/list'
    })
}