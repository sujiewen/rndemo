
import md5 from "react-native-md5";
import SUUID from './uuid'
import DeviceInfo from 'react-native-device-info'

export default class SParamsTool {
    static async getParamForBasic(dictObj, callback) {
        let paramDict = {...dictObj};
        let uuid = await SUUID.getUUID();
        paramDict["sysCode"]       = "gwy";
        // paramDict["token"]         = tmpToken;
        paramDict["version"]       = await DeviceInfo.getReadableVersion();//DeviceInfo.getVersion();
        paramDict["clientType"]    = "iOS";
        paramDict["orderNo"]       = uuid;
        paramDict["sign"]          = this.getSignRuleString(paramDict);
        paramDict["versionCode"]   = 11;//DeviceInfo.getVersion() ;
        paramDict["deviceType"]    = 'iPhone Simulator';  //DeviceInfo.getModel();

        return paramDict;
    }

    static getSignRuleString(paramDict) {
        let paramAllKeys = Object.keys(paramDict);
        let softParamAllKeys = paramAllKeys.sort();

        let secretKey = "111111"
        let sortStr = secretKey;
        for (let tmpKey in softParamAllKeys) {
            let value = paramDict[tmpKey];
            if (value != null && value != undefined && value.length != 0) {
                sortStr+=(key+value);
            }
        }

       return md5.hex_md5(sortStr);;
    }

}