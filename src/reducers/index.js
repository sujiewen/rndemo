'use strict';

import {combineReducers} from 'redux';
import loginIn from './loginReducer';
import reg from './regReducer';
import data from './dataReducer'


const appReducer = combineReducers({
    loginIn: loginIn, // 登录类型状态
    reg: reg,         // 注册类型状态
    data: data,       //
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;