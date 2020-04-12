import axios from 'axios';

//获取歌单的信息
export function getPlaylist(url, playlistID) {
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                id:playlistID
            }
        }).then(res => {
            resolve(res.data.playlist);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取歌单的评论
export function getPlaylistComment(url, playlistID,limit) {
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                id: playlistID,
                limit:limit
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}