/*
 * @providesModule LXDeparmentList
 *
 * */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ListView,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
    FlatList
} from 'react-native';

import LXRequest from "../common/LXRequest";
var screenW = Dimensions.get('window').width;

export default class LXDeparmentList extends Component {

    static navigationOptions = {
        title:'部门'
    };
    constructor(props){
        super(props);
        this.state = {
            ds:[]
        };
    }
    // goBack() {
    //     this.props.navigation.goBack();
    // }
    async getCurUserInfo(callback) {
        let user = await global.storage.load({
            key: 'user',
            autoSync: false,
        });

        callback(user);
    }

     componentWillMount() {
         this.getCurUserInfo((data)=>{
             var url = 'http://uat.gongwuyun.net/appApi/org/A1003';
             var param = {
                 departmentId:this.props.navigation.state.params.depatmentId,
                 token:data.userReginfo.token
             }

             LXRequest.PostWithUrlParam(url,param,(json)=>{
                 console.log(json.data);
                 if (json.code == 200){
                    this.handData(json.data)
                 } else {
                     alert(json.desc);
                 }

             },(error)=>{
                 alert('请求失败');
                 console.log(error);
             });
         });
     }

     handData(data){
         var ds = [];

         for (let tI in data.departmentList) {
             data.departmentList[tI]['type'] = 1;
             ds.push(data.departmentList[tI])
         }

         for (let tI in data.userList) {
             data.userList[tI]['type'] = 0;
             ds.push( data.userList[tI])
         }

         this.setState(
             {
                 ds:ds
             }
         )
     }

    render() {
        return(
            <FlatList
                data={this.state.ds}
                renderItem={this._renderItem}
            />
        )
    }

    _renderItem = ({item}) => (

        (item.type == 0) ? (
            <TouchableOpacity style={styles.row} onPress={ () => {}}>
                <Image defaultSource={require('../assets/images/person_placeholder.png')} source={{uri:''}} style={styles.image} />
                <View style={styles.rContainer}>
                    <Text style={styles.title}>{item.userName}</Text>
                    <Text style={styles.subtitle}>{item.userName}</Text>
                </View>
                <View style={styles.line} />
            </TouchableOpacity>
        ):(
            <TouchableOpacity style={styles.row} onPress={ () => {} }>
                <Image defaultSource={require('../assets/images/group_placeholder.png')} source={{uri:''}} style={styles.image} />
                <View style={styles.rContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.line} />
            </TouchableOpacity>
        )
    )
}

var styles = StyleSheet.create({
    line: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        backgroundColor: "#EEE"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        height:80
    },
    rContainer: {
        marginLeft: 30
    },
    image: {
        marginLeft: 40,
        width: 44,
        height: 44,
        borderRadius: 4
    },
    title: {
        fontSize: 18
    },
    subtitle: {
        fontSize: 14,
        marginTop: 8
    }
})