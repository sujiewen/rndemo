import axios from 'axios';
import qs from 'querystring';
import paramsTools from './SParamsTool';

// let token = '';//global.storage.getItem("user");
// let index = token.indexOf("@");
// if (index >= 0) {
//     token = token.substring(0,index);
// }

const instance = axios.create({
    baseURL: 'https://www.gongwuyu.cn/',
    timeout: 20000,
    // headers: { 'Authorization': token }
});

instance.interceptors.request.use(config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    });

instance.interceptors.response.use(response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                //
                //
                // // 返回 401 清除token信息并跳转到登录页面
                //
                // store.commit(types.LOGOUT);
                //
                // router.replace({
                //
                //     path: 'login',
                //
                //     query: {redirect: router.currentRoute.fullPath}
                //
                // });
            }

        }
        return Promise.reject(error)   // 返回接口返回的错误信息
    }
);

//
export default class SHttp {

    static initConfig(token) {
        // let tmpConfig = config ? {...config} : {};
        // let user = await global.storage.load({
        //     key: 'user',
        //     autoSync: false,
        // });

        let index = token.indexOf("@");
        if (index >= 0) {
            token = token.substring(0,index);
        }

        let tmpConfig = {};
        tmpConfig.headers = {
            'Authorization' : token, //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
            'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8'
        };


        return tmpConfig;
    }

    static async get(url, params, config) {
        let tmpConfig = this.initConfig(config);
        try {
            let query = await qs.stringify(params);
            let res = null;
            if (!params) {
                res = await instance.get(url,null,tmpConfig)
            } else {
                res = await instance.get(url + '?' + query,null,tmpConfig)
            }
            return res
        } catch (error) {
            return error
        }
    }

    static async post(url, params, token, config, callback) {
        let tmpConfig = SHttp.initConfig(token);
        let tmpParams = {...params};
        tmpParams["token"] = token;

        tmpParams = await paramsTools.getParamForBasic(tmpParams);
        let paramAllKeys = Object.keys(tmpParams).sort();
        let keyvalueStr = '';
        for (let i = 0; i < paramAllKeys.length; i++) {
            keyvalueStr+= (paramAllKeys[i]+"="+tmpParams[paramAllKeys[i]])
            if (i != (paramAllKeys.length - 1)) {
                keyvalueStr+="&";
            }
        }

        // keyvalueStr= 'clientType=iOS&date=2019-04-10&deviceType=iPhone%20Simulator&orderNo=9A6A3B14B0234FFEA50227B767722FF4&sign=262480dfe029d0753c0ef71d9e89e748&sysCode=gwy&token=Bearer%20eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODA4MjcyMDgsInVzZXJfbmFtZSI6IjFmZTU0YWIxM2Q5NDQ5YmNhODhmMGM5NDZmZjE0MTU0IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImE3YjI0MDc3LTExMzUtNGQ3NC05OGM1LTAyOGExOTdmYTk2MCIsImNsaWVudF9pZCI6ImludGVybmFsX2lkZWFsdXNlciIsInNjb3BlIjpbIndlYi1hcHAiXX0.anEIizoqqiXR5rNZrpmFeobw4w6GMuaKEC-nIy7-JXiWcqiSPbP4cl6yc1WGXE4fzqkdszXTTMTnymkP9XFCuBOuFdnBffTW63XluDcllM5ngd0l1cjk4vBLFCwRNWUeSMlB25GTXPBqLX6pgmlnZ-yBDxcGEISjtNXlxHItZdQZDqDn61gwlHAHz-i7UDQTf1x-Ks0xkbvxva4Vad_ml5eoBiFBli-1PE8LiRipw34YQye-eH5p4T7H4RInJ7bOBG-KN95UzVM5t-_UUh6CuCQbDy1G9uwYuPAKUEdisdOUOpfeYjcbd4Isz9ShSZ8ErQR1-Q6U_kr1RLfSOajlqQ%40GWY_APP_TOKEN_%401fe54ab13d9449bca88f0c946ff14154&version=0.9.19&versionCode=98';
        try {
            instance.post(url,  keyvalueStr, tmpConfig)
                .then(function (response) {
                    callback(true, response);
                })
                .catch(function (error) {
                    callback(false, error);
                });
        } catch (error) {
            callback(false, error);
        }
    }

    static async patch(url, params, config) {
        let tmpConfig = SHttp.initConfig(config);
        try {
            let res = await instance.patch(url, params, tmpConfig)
            return res
        } catch (error) {
            return error
        }
    }
    static async put(url, params, config) {
        try {
            let tmpConfig = SHttp.initConfig(config);
            let res = await instance.put(url, params, tmpConfig)
            return res
        } catch (error) {
            return error
        }
    }
    static async delete(url, params, config) {
        /**
         * params默认为数组
         */
        try {
            let tmpConfig = SHttp.initConfig(config);
            let res = await instance.post(url, params,tmpConfig)
            return res
        } catch (error) {
            return error
        }
    }

    static connectCommonUrlPor(funPath, apiPath) {
        if ( funPath == "appUser") {
            return funPath+"/"+apiPath;
        }
        else if(funPath == "webApi/") {
            return [funPath+"/"+apiPath];
        }

        return "appApi/"+funPath+"/"+apiPath;
    }
}
