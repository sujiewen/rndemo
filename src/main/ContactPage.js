import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,
    Button,
    TouchableOpacity,
    ImageBackground,
    Platform
} from 'react-native';

import {connect} from 'react-redux';
import {THEME_BACKGROUND} from '../assets/css/color';
import {unitWidth,width,statusBarHeight,isIphoneX} from  '../common/adapterUtil'
import * as dataAction from './dataAction'
import {TabNavigatorContainer,TabNavigator2Container} from '../pages/Top'
import {SafeAreaView} from "react-navigation";
import CustomNavigatorBar from '../navigator/CustomNavigatorBar'

let {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

let navigationHeight = 44;


class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '通讯录',
            titleCenter: false,
            seperator: true,
            leftElement: undefined,
            rightElement: undefined,
            containerStyle: styles.container1,
            titleStyle: undefined,
            leftStyle: undefined,
            rightStyle: undefined,
            navigatorHeight:(Platform.OS === 'ios'?(statusBarHeight+navigationHeight): navigationHeight),
            navigatorWidth:width,
            isStaffMeber:false,
            user:undefined
        };
        console.warn(this.state.navigatorHeight);

        // let user = await global.storage.load({
        //     key: 'user',
        //     autoSync: false,
        // }).then(ret => {
        //     if (ret && ret.userReginfo) {
        //         let {initData} =  this.props;
        //         initData(true,{user:ret});
        //
        //         this.setState((previousState) => {
        //             return ({
        //                 user: ret,
        //             })
        //         });
        //     }
        // }).catch(err => {
        //     // console.warn(err.message);
        // });

        // var url = "http://uat.gongwuyun.net/"+http.connectCommonUrlPor("attend/home","A1001");
        // var param = {
        //
        // };
        //
        // LXRequest.PostWithUrlParam(url,param,(json)=>{
        //     console.log(json.data);
        //     if (json.code == 200){
        //         dispatch(loginSuccess(true, json.data));
        //     } else {
        //         alert(json.desc);
        //     }
        //
        // },(error)=>{
        //     alert('请求失败');
        //     console.log(error);
        // });

    }

    componentWillMount() {
        // global.storage.load({
        //     key: 'user',
        //     autoSync: false,
        // }).then(ret => {
        //     if (ret && ret.userReginfo) {
        //         let {initData} =  this.props;
        //         initData(true,{user:ret});
        //
        //         this.setState((previousState) => {
        //             return ({
        //                 user: ret,
        //             })
        //         });
        //     }
        // }).catch(err => {
        //     // console.warn(err.message);
        // });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.warn('ContactPage');

        return true;
    }

    click() {
        this.setState((previousState) => {
            return (
                {
                    ...previousState,
                    isStaffMeber: !previousState.isStaffMeber,
                })
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{height: this.state.navigatorHeight}}>
                    <ImageBackground source={require('../assets/images/nav_bg.png')} resizeMode={'cover'} style={{width:this.state.navigatorWidth, height: this.state.navigatorHeight}}>
                        <View style={{paddingTop:statusBarHeight,height:navigationHeight,width:this.state.navigatorWidth}}>
                            <Text style={{fontSize: 20,color: 'white', textAlign:'center',paddingTop:12,height:navigationHeight}}>通讯录</Text>
                        </View>
                    </ImageBackground>
                </View>

                <TouchableOpacity onPress = {() => {this.click();}}>
                    <View　 style={styles.searchStyle} >
                        <Image style={{width:40,height:40}} source={require('../assets/images/search_button.png')}>
                        </Image>
                    </View>
                </TouchableOpacity>

                <TabNavigatorContainer></TabNavigatorContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    },
    container1: {
        backgroundColor: 'red'
    },
    naviRow: {
        flexDirection: 'row'
    },
    textStyle1: {
        fontSize: 20,
        textAlign: 'center',
        padding: 40
    },
    searchStyle:{
        width:width,
        height:40,
        backgroundColor:'#F6F6F6',
        justifyContent:'center',
        alignItems:'center',
        marginTop:0,
        borderRadius:6,

    },
});


export default connect(
    (state) => ({
        state: state.status,
        data: state.data
    }),
    (dispatch) => ({
        initData: (status,data) => dispatch(dataAction.initData(status,data))
    })
)(ContactPage)