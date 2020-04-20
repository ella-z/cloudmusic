import axios from 'axios';

//获取MV的详情
export function getMVDetail(id) {
    let url = 'http://localhost:3000/mv/detail';
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                mvid: id
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取最新的MV
export function getNewestMV(limit) {
    const url = 'http://localhost:3000/mv/first';
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                limit: limit
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取MV 
export function getMV(area,order,limit,offset) {
    const url = 'http://localhost:3000/mv/all';
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                area:area,
                order:order,
                limit: limit,
                offset:offset
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取MV排行
export function getRanklistMV(limit) {
    const url = 'http://localhost:3000/top/mv';
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                limit: limit,
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}