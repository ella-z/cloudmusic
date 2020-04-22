import axios from 'axios';

//动态获取评论
export function getComments(id) {
    let url = `http://localhost:3000/comment/event?threadId=${id}`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
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
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
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
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取歌单分类/playlist/catlist
export function getPlaylistCatlist() {
    let url = 'http://localhost:3000/playlist/catlist';
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//根据cat来获取相关的歌单
export function getCatPlaylist(cat) {
    let url = `http://localhost:3000/top/playlist?limit=100&order=hot&cat=${cat}`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取最新的歌曲
export function getLatestMusic(type) {
    let url = `http://localhost:3000/top/song?type=${type}`;
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
        }).then(res => {
            resolve(res.data.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取歌曲详情
export function getMusicDetail(ids) {
    let url = 'http://localhost:3000/song/detail';
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get',params:{
                ids:ids
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

