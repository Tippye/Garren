import request from "@/utils/request";

const url = '/api/file'

/**
 * 在inis系统目录public/storage/random/images/下新建文件夹或txt文件存储图片
 * 参数 file=新建的文件夹或txt名
 * 本地模式：文件夹为随机图本地模式，里面存放的是需要被随机的图片，调用加载需要消耗服务器带宽资源（不推荐）
 * 外链模式：txt文件内存放的是图片地址，一行一个，调用加载不需要占用服务器带宽资源（推荐）
 *
 * @param id    推荐提交，防止多次请求，返回同一结果          参数的值随便，只要是唯一的就行
 * @param file  对应的随机图文件或者文件夹                  如果不填写，默认随机整站的随机图
 * @param json  获取JSON格式数据
 * @return {*}
 */
export function getRandomImg(id = null, file = null, json = false) {
    return request({
        url: url + '/random/images',
        params: {
            id, file, json
        }
    })
}

/**
 * 在inis系统目录public/storage/random/words/下新建txt文件存储内容
 * @param file{String}      新建的txt文件名, 如果不填写，默认随机整站的随机文本
 * @param id{String}        推荐提交，防止多次请求，返回同一结果。参数的值随便，只要是唯一的就行
 * @returns {Promise<unknown>}
 */
export function getRandomWords(file = null, id = null) {
    return request({
        url: url + '/words',
        params: {
            file,
            id
        }
    })
}