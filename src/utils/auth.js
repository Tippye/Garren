import Cookie from "js-cookie";

/**
 * 获取Token
 */
export function getToken() {
    return Cookie.get("token")
}

/**
 * 设置Token
 */
export function setToken(token) {
    Cookie.set("token", token)
}

/**
 * 删除Token
 */
export function removeToken() {
    Cookie.remove("token")
}
