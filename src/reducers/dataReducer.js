import * as types from "../constants/loginTypes";

const initialState = {
    data: null,
};

export default function initData(state = initialState, action) {
    console.log('initData1');
    return {
        ...state,
        status:true,
        data: action.data,
    };
}