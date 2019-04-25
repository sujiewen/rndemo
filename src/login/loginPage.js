import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,
    Button,
    TextInput,
    Dimensions,
    ImageBackground,
    FlatList
} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import * as loginAction from './loginAction';// 导入action方法
import {NavigationActions,StackActions} from 'react-navigation';
import Modal from "react-native-simple-modal";
import LXRequest from "../common/LXRequest";
import { Image } from 'react-native-elements';

import NaivgationUtil from '../navigator/NavigationUtil';

// 清空导航记录，跳转到首页
const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Main'})
    ]
});

let screenW = Dimensions.get('window').width
let screenH = Dimensions.get('window').height

type Props = {};
class LoginPage extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            status:true,
            open:false,
            ds:[]
        };
    }

    componentWillMount() {

        this.checkHasLogin();
    }

    checkHasLogin() {
        global.storage.load({
            key: 'user',
            autoSync: false,
        }).then(ret => {

            if (ret && ret.userReginfo) {
                this.state.user = ret.userReginfo;
                this.state.ds = ret.orgInfo;
                this.state.status = true;


                // // console.warn('用户已经登录：' + ret.name);
                // this.props.navigation.dispatch(resetAction);
                NaivgationUtil.resetToHomePage({
                    navigation: this.props.navigation
                });
            }
        }).catch(err => {
            // console.warn(err.message);
        });
    }

    // 状态更新，判断是否登录并作出处理
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            // this.props.navigation.dispatch(resetAction);
            this.checkHasLogin();
            return true;
        }
        return true;
    }

    updateState(key, val) {
        let state = this.state;
        state[key] = val;
        this.setState(state);
    }

    doLogin() {

        if (!this.mobile) {
            this.updateState('message', '请输入手机号码');
            return;
        }
        if (!this.password) {
            this.updateState('message', '请输入密码');
            return;
        }

        var url = 'http://uat.gongwuyun.net/appApi/permission/A0001';
        var uuid = 'BD6120BD-3612-4D56-8957-99F5D6F02C52';
        var param = {
            phoneId:this.mobile,
            password:this.password,
            deviceId:uuid,
            type:'2'
        }

        LXRequest.PostWithUrlParam(url,param,(json)=>{
            console.log(json.data);
            if (json.code == 200){
                var ds = [];
                for (var i = 0; i < json.data.orgInfo.length; i++) {
                    ds.push({key: json.data.orgInfo[i]});
                }
                this.user = json.data;
                this.setState({
                    open:!this.state.open,
                    ds:ds
                });

                // dispatch(loginSuccess(true, json.data.userReginfo));
            } else {
                alert(json.desc);
            }

        },(error)=>{
            alert('请求失败');
            console.log(error);
        });

    }

    doReg() {

        var status = !this.state.status;
        this.setState({
            message: '',
            status:status
        })
    }
    pushReg(name,idCard){
        this.props.navigation.navigate('Reg1',{'name':name ,'idCard':idCard});
    }

    findAccount() {
        this.props.navigation.navigate('FindAccount');
    }

    pushDisclaimer(){
        this.props.navigation.navigate('Disclaimer');
    }

    render() {
        const {login} = this.props;
        let message = this.state && this.state.message ? this.state.message : '';
        if (this.state.status == true) {
            return (
                <ImageBackground style={styles.bgViewStyle} source={require('../assets/images/background.png')}>
                    {/*头像*/}
                    <View style={styles.topViewStyle}>
                        <View>
                            <Text style={{fontSize: 14, color: 'white', marginLeft: 20, width: 60}}
                                  onPress={() => this.doReg()}>用户登录</Text>
                            <View
                                style={{height: 2, backgroundColor: 'blue', width: 60, marginLeft: 18, marginTop: 3}}/>
                        </View>
                        <View>
                            <Text style={{fontSize: 14, color: 'white', marginLeft: 20, width: 60}}
                                  onPress={() => this.doReg()}>用户注册</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/images/wukong.png')}
                           style={styles.iconStyle}
                    />
                    {/*账号文本框*/}
                    <View style={[styles.txetViewStyle, {marginTop: 60}]}>
                        <Text style={{fontSize: 13, color: 'white', lineHeight: 40}}>
                            手机号码
                        </Text>
                        <TextInput style={[styles.textInputStyle]}
                                   placeholder='请输入手机号码(必填)'
                                   clearButtonMode='always'
                                   keyboardType={'numeric'}
                                   autoCapitalize={'none'} maxLength={11}
                                   onChangeText={(text) => this.mobile = text}
                        />
                    </View>
                    {/*密码文本框*/}
                    <View style={styles.txetViewStyle}>
                        <Text style={{fontSize: 13, color: 'white', lineHeight: 40}}>
                            密　　码
                        </Text>
                        <TextInput style={[styles.textInputStyle]}
                                   placeholder='请输入密码(必填)'
                                   secureTextEntry={true}
                                   clearButtonMode='always'
                                   autoCapitalize={'none'} maxLength={20}
                                   onChangeText={(text) => this.password = text}
                        />
                    </View>
                    <View style={styles.forgetViewStyle}>
                        <Text style={{fontSize: 13, color: 'white', width: 100, marginRight: 20, marginTop: 15}}
                              onPress={() => this.findAccount()}
                        >忘记密码?</Text>
                    </View>

                    {/*登录*/}
                    <TouchableOpacity>
                        <ImageBackground style={styles.loginStyle} source={require('../assets/images/button_bg.png')}>
                            <Text style={{fontSize: 16, color: 'white', width: 250, textAlign: 'center'}}
                                  onPress={() => this.doLogin()}>登 录</Text>
                        </ImageBackground>

                    </TouchableOpacity>
                    <Modal
                        offset={this.state.offset}
                        open={this.state.open}
                        modalDidOpen={this.modalDidOpen}
                        modalDidClose={this.modalDidClose}
                        style={{alignItems: "flex-end"}}
                        modalStyle={{backgroundColor:'#EEEBF3', margin: 0, padding: 0}}
                        containerStyle={{justifyContent: "flex-end"}}
                    >
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 18,marginTop:5}}>选择要进入的组织</Text>
                            <FlatList
                                data={this.state.ds}
                                renderItem={this._renderItem}
                            />
                        </View>
                    </Modal>
                </ImageBackground>

            )
        } else {
        }
    }
    _renderItem = ({item}) => (
          <TouchableOpacity style={{width:screenW}}
                            onPress={()=> this.notifyServer(item.key)} >
            <Text style={styles.companyStyle}>{item.key.shortName}</Text>
        </TouchableOpacity>
    );

    notifyServer(item){
        let url = 'http://uat.gongwuyun.net/appApi/permission/A0015';
        let param = {
            orgId:item.id,
            orgType:item.orgType,
            token:this.user.userReginfo.token
        }
        const {login} = this.props;
        LXRequest.PostWithUrlParam(url,param,(json)=>{
            console.log(json.data);
            if (json.code == 200){
                login(this.user, item);
            } else {
                alert(json.desc);
            }

        },(error)=>{
            alert('请求失败');
            console.log(error);
        });
    }
}





const styles = StyleSheet.create({
    companyStyle:{
        height:40,
        lineHeight:40,
        textAlign:'center',
        fontSize: 13,
        backgroundColor:'white',
        marginTop:5,
        marginLeft:10,
        marginRight: 10
    },
    bgViewStyle:{
        flex:1,
        width:screenW,
        height:screenH,
        alignItems:'center'
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:64,
        alignItems:'flex-start',
        width:screenW
    },
    iconStyle:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        marginTop:40
    },
    textInputStyle:{
        backgroundColor:'transparent',
        width:170,
        height:40,
        marginLeft:10,
        textAlign:'left'
    },
    loginStyle:{
        width:250,
        height:35,
        backgroundColor:'rgb(73,151,220)',
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,
        borderRadius:6
    },
    txetViewStyle:{
        flexDirection:'row',
        height:40,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'white',
        marginTop:10
    },
    forgetViewStyle:{
        flexDirection:'row-reverse',
        width:screenW

    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: (m, p) => dispatch(loginAction.login(m, p)),
    })
)(LoginPage)