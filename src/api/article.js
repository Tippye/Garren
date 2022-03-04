import request from "@/utils/request";

const url = '/api/article'

/**
 * 通过该接口，你可以获取到全部的文章数据
 * @return {*}
 * @params params
 */
export function getArticles(params) {
    return request({
        url,
        params
    })
}

/**
 * 通过该接口，你可以获取指定文章的详细数据
 *
 * @params params
 * @return {*}
 */
export function getArticle(params) {
    return request({
        url,
        params
    })
}

/**
 * 通过该接口，你可以自己编写SQL语法获取更多自定义的数据
 *
 * @params params
 * @return {*}
 */
export function getArticlesBySQL(params) {
    return request({
        url: `${url}/sql`,
        params
    })
}

/**
 * 通过该接口，你可以获取上一篇和下一篇文章的详细数据
 *
 * @params id    文章id
 * @return {*}
 */
export function getNearArticle(id) {
    return request({
        url,
        params: {id}
    })
}