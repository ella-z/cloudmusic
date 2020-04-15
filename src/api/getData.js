import axios from 'axios';

//动态获取评论
export function getComments(id) {
    let url = `http://localhost:3000/comment/event?threadId=${id}`;
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

//获取歌词
export function getLyric(id) {
    let url = `http://localhost:3000/lyric?id=${id}`;
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

//获取音乐url
export function getMusic(id) {
    let url = `http://localhost:3000/song/url?id=${id}`;
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