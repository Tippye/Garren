import request from "@/utils/request";

const url = '/api/users'

/**
 * 通过该接口，你可以获取到全部的用户数据
 * 为了安全起见，该接口只返回非敏感数据，例如帐号、密码和邮箱等敏感数据已被屏蔽
 *
 * @return {*}
 */
export function getUsers() {
    return request({
        url
    })
}

/**
 * 通过该接口，你可以开发用户登录接口
 * 登录成功之后，会返回一个 login-token 的加密字段，请务必保管好该字段
 * login-token 字段将用于判断权限操作
 * login-token 的有效期为 7200 秒，即2个小时，过期后需要重新登录
 *
 * @param account{String}   用户名
 * @param password{String}  密码
 * @return {*}
 */
export function login({account, password}) {
    return request({
        url,
        method: 'post',
        params: {
            "mode": "login",
            account,
            password
        }
    })
}

/**
 * 通过该接口，你可以开发用户注册接口
 * 注册成功后，系统会自动分配一个默认的随机头像
 *
 * PS：默认使用邮箱登录，需要自定义帐号的，需要登录后自己设置
 *
 * @param nickname{String}  昵称
 * @param email{String}     邮箱
 * @param password{String}  密码
 * @param code{String}      邮箱验证码
 * @return {*}
 */
export function register({nickname, email, password, code}) {
    return request({
        url,
        method: 'post',
        data: {
            mode: "register",
            nickname,
            email,
            password,
            code
        }
    })
}

/**
 * 通过该接口，你可以新增或者修改用户数据
 * 前提条件是必须登录且拥有权限的用户
 * 只允许账号为 管理员 且 未被禁用 的账号进行提交
 *
 * @param user{User}        用户
 * @param password{string}  密码
 * @param code{string}      邮箱验证码
 */
export function changeUser(user, password = null, code = null) {
    return request({
        url,
        method: 'post',
        data: {
            id: user.id,
            account: user.account,
            nickname: user.nickname,
            sex: user.sex,
            email: user.email || null,
            phone: user.phone,
            head_img: user.head_img,
            description: user.description,
            address_url: user.address_url,
            code: code
        }
    })
}

/**
 * 删除用户
 *
 * @param user{User}    用户
 * @return {*}
 */
export function deleteUser(user) {
    return request({
        url,
        method: 'post',
        data: {
            mode: 'remove',
            id: user.id
        }
    })
}