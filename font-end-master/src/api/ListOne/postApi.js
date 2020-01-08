import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

export function PostCommentNhanvien (item) {
    return request({
        url: 'truongphong/thanhvien/10/comment',
        method: 'post',
        data: (item)
    })
}

export function PostCommentCohoi (item) {
    return request({
        url: `truongphong/congviec/10/comment`,
        method: 'post',
        data: (item)
    })
}