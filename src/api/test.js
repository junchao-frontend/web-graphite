import request from '@/utils/request'

export function dataStatistics() {
    return request({
        url: '/v2/Statistics',
        methods: 'get'
    })
}