'use strict';

import * as types from '../constants/loginTypes';

// 模拟用户信息
// let user = {
//     name: 'test',
//     nikeName: 'test',
//     age: 30,
//     pwd: '123456',
//     mobile: 13900000000
// };

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login(user, company) {
    console.log('登录方法');
    return dispatch => {
        dispatch(loginSuccess2(user, company));
        // 模拟用户登录
        // if (mobile === '' + user.mobile && password === user.pwd) {
        //     dispatch(loginSuccess(true, user));
        // } else {
        //     dispatch(loginError(false));
        // }


        /*let result = fetch('https://localhost:8088/login')
         .then((res) => {
         dispatch(loginSuccess(true, user));
         }).catch((e) => {
         dispatch(loginError(false));
         })*/
    }
}

function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

export function loginSuccess2(user, company) {
    user.selectCompany = company;
    global.storage.save({
        key: 'user',
        data: user,
    });
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    }
}

export function loginSuccess(isSuccess, user) {
    global.storage.save({
        key: 'user',
        data: user
    });
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}

export function loginOut(mobile, password) {
    console.log('退出登录');
    return dispatch => {
        dispatch(loginOutType());
        /*let result = fetch('https://localhost:8088/logOut')
         .then((res) => {
         dispatch(loginOut());
         }).catch((e) => {
         dispatch(loginOut());
         })*/
    }
}

const loginOutType = () => {

    global.storage.remove({key: 'user'});

    return {
        type: types.LOGIN_OUT_DONE,
        user: null
    }
}
