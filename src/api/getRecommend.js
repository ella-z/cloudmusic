import axios from 'axios';

//获取相关推荐
export function getRecommend(url){
    return new Promise((resolve,reject)=>{
        axios({
            url,method:'get'
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}