'use strict';

import * as types from "../constants/loginTypes";

export function initData(status, data) {
    console.log('initData');
    return dispatch => {
        dispatch(dataT(status,data));
    }
}

function dataT(status,data) {
    return {
        type: 'data',
        status:status,
        data:data
    }
}