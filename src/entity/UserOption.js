export default class UserOption {
    alipay
    login_auth
    wechat_pay

    constructor({alipay, login_auth, wechat_pay}) {
        this.alipay = alipay
        this.login_auth = login_auth
        this.wechat_pay = wechat_pay
    }
}