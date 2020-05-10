import axios from 'axios';

export function postUser(account, password) {
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