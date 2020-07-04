import axios from 'axios';

export function postUser(account, password) {
    //验证账号的正确性，并返回相关的数据。
    const url = "http://localhost:3000/login/cellphone";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'post', params: {
                phone: account,
                password: password
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

export function getUserInformation(uid) {
    //获取账号的详细的信息
    const url = "http://localhost:3000/user/detail";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                uid
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

export function getUserDetail() {
    //获取账号的详细的信息
    const url = "http://localhost:3000/user/subcount";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get'
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

export function getUserPlaylist(uid) {
    //获取用户的歌单
    const url = "http://localhost:3000/user/playlist";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                uid
            }
        }).then(res => {
            resolve(res.data.playlist);
        }).catch(err => {
            reject(err.data);
        })
    });
}

export function checkPhone(phone) {
    const url = "http://localhost:3000/cellphone/existence/check";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                phone
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

export function sentCaptcha(phone) {
    const url = "http://localhost:3000/captcha/sent";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'get', params: {
                phone
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

export function register(phone, password, captcha, nickname) {
    const url = "http://localhost:3000/register/cellphone";
    return new Promise((resolve, reject) => {
        axios({
            url, method: 'post', params: {
                phone, password, captcha, nickname
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}