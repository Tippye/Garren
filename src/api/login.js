import request from "@/utils/request";

export function getUsers() {
    return request({
        url: '/api/users',
        method: 'GET'
    })
}