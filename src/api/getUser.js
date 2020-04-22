import axios from 'axios';

export function getUser(iduser) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:81/music/getUser.php'
        axios({ url, method: 'get' ,params:{
            iduser:iduser
        }}).then(res => {
            resolve(res.data[0]);
        }).catch(err => {
            reject(err.data);
        })
    })
}

//获取喜欢的音乐
export function getLikeMusic() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:81/music/getLikeSong.php'
        axios({ url, method: 'get' }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}

export function insertLikeSong(idmusic) {
    console.log(idmusic);
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:81/music/insertLikeSong.php'
        axios({ url, method: 'get' ,params:{
            idmusic:idmusic
        }}).then(res => {
            resolve(res.data[0]);
        }).catch(err => {
            reject(err.data);
        })
    })
}