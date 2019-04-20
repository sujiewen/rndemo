import {AsyncStorage} from 'react-native';
import DeviceInfo from 'react-native-device-info'

let globalUUID = null;

export default class SUUID {

    static async getUUID(dictObj, callback) {
        let uuid = await AsyncStorage.getItem("lx_uuid");
        if (!uuid) {
            uuid = DeviceInfo.getUniqueID();
            AsyncStorage.setItem('lx_uuid',uuid).then(value => {
                console.log('value='+uuid);
            });
        }
        globalUUID = uuid;
        return uuid;
    }

}

// 全局变量
global.uuid = SUUID.getUUID();