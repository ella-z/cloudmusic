import axios from 'axios';

export function getSearch(keywords,type,offset) {
    let url = 'http://localhost:3000/search';
    return new Promise((resolve, reject) => {
        axios({ url, method: 'get',params:{
            keywords,
            type,
            offset
        } }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取热搜列表
export function getSearchHot(url) {
    return new Promise((resolve, reject) => {
        axios({ url, method: 'get' }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}


//搜索多重匹配
export function getSearchMultimatch(keywords) {
    let url = 'http://localhost:3000/search/suggest';
    return new Promise((resolve, reject) => {
        axios({ url, method: 'get',params:{
            keywords:keywords
        } }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data);
        })
    })
}