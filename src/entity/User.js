import UserOption from './UserOption'

/**
 * 用户类
 */
export default class User {
    id
    nickname
    sex
    head_img
    description
    status
    address_url
    opt
    create_time
    update_time
    last_login_time
    account
    email
    phone

    constructor({
                    id,
                    nickname,
                    sex,
                    head_img,
                    description,
                    status,
                    address_url,
                    opt,
                    create_time,
                    update_time,
                    last_login_time,
                    account,
                    email,
                    phone
                }) {
        this.id = id
        this.nickname = nickname
        this.sex = sex
        this.head_img = head_img
        this.description = description
        this.status = status
        this.address_url = address_url
        this.create_time = create_time
        this.update_time = update_time
        this.last_login_time = last_login_time
        this.opt = new UserOption(opt)
        this.account = account
        this.email = email
        this.phone = phone
    }
}
