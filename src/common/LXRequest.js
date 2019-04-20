/**
 * 发送请求
 * @providesModule LXRequest
 */
import SParamsTool from './SParamsTool'
export default class LXRequest {

    static ParamType = {
        ParamTypeJSON:'application/json',
        ParamTypeURL:'application/x-www-form-urlencoded;charset=utf-8'
    }

    /**
     *
     * @param {请求基本地址} url
     * @param {请求参数} param
     * @param {请求成功回调} success
     * @param {请求失败回调} failure
     * @return Get请求
     * 在外界提示方法功能作用
     */
    // http://192.168.33.12:5000/home
    // ?name=abc&age=20'
    static Get(url,param,success,failure){
        /*
        *
        *
        * var param = {
            name:'abc',
            age:20
         }
        * */

        // 拼接参数
        if(param){
            console.log('有参数');

            var keys = Object.keys(param);

            var totalParam = '';
            keys.forEach((key,i)=>{
                var mark = '?';

                if (i > 0) {
                    mark = '&'
                }

                var value = param[key];

                totalParam += mark;
                totalParam = totalParam + key + '=' + value;
                // key:name value:abc name=abc

            })

            url = url + totalParam;

            console.log(url);
        }


        fetch(url)
            .then((response)=>response.json())
            .then((json)=>{
                // 请求成功,并且解析数据为json的时候调用
                if(success){
                    success(json);
                }
            })
            .catch((error)=>{
                if(failure){
                    failure(error);
                }
            })
    }


    /**
     *
     * @param {请求基本地址} url
     * @param {请求参数} param
     * @param {请求成功回调} success
     * @param {请求失败回调} failure
     * @return Post请求
     */
    static PostWithUrlParam(url,param,success,failure){

        this.Post(url,param,this.ParamType.ParamTypeURL,success,failure);

    }

    /**
     *
     * @param {请求基本地址} url
     * @param {请求参数} param
     * @param {请求成功回调} success
     * @param {请求失败回调} failure
     * @return Post请求JSON
     */
    static PostWithJsonParam(url,param,success,failure){

        this.Post(url,param,this.ParamType.ParamTypeJSON,success,failure);

    }

    /**
     *
     * @param param
     * @param paramType
     * @return {string}
     */
    static async resolveParam(param,paramType){

      let result =  await SParamsTool.getParamForBasic(null);
        Object.assign(result,param);
        console.log(result);
        if(paramType == 'application/json'){
            return JSON.stringify(param);
        } else if (paramType == 'application/x-www-form-urlencoded;charset=utf-8'){
            // 获取key
            var totalParam = '';
            var i = 0;

            for (let key in result){

                var mark = '';

                if (i > 0){
                    mark = '&'
                }

                var value = result[key];

                //  name=abc&age=20
                totalParam += mark + key + '=' + value;
                i++;
            }
            return totalParam;
        }

    }


    /**
     *
     * @param url
     * @param param
     * @param paramType
     * @param success
     * @param failure
     * @return post请求
     */
    static async Post(url,param,paramType,success,failure){

        // 处理请求参数
        this.resolveParam(param,paramType);
        var body = await this.resolveParam(param,paramType);
        // 定制请求
        var optionals = {
            method:'POST',
            headers:{
                'Content-Type':paramType
            },
            body:body
        }

        // 发送请求
        fetch(url,optionals)
            .then((response)=>response.json())
            .then((json)=>{
                if(success){
                    success(json);
                }

            })
            .catch((error)=>{
                if(failure){
                    failure(error);
                }
            })
    }

}