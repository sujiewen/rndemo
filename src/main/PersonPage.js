import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions,StackActions} from 'react-navigation';
import {THEME, THEME_BACKGROUND} from '../assets/css/color';
import CButton from '../common/button';
import * as loginAction from "../login/loginAction";
import NaivgationUtil from '../navigator/NavigationUtil'
import NavigationService from '../navigator/NavigationService'

// 清空导航记录，跳转到登录页
const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Login', params:{state:this.props,test22:22}})
    ]
});

type Props = {};
class PersonPage extends Component<Props> {
    //默认熟悉，通过属性配置动画

    // static navigationOptions = {
    //     tabBarLabel: '我的',
    //     tabBarIcon: ({focused}) => {
    //         if (focused) {
    //             return (
    //                 <Image style={[styles.icon]} source={require('../assets/images/tab_my_selected.png')}/>
    //         );
    //         }
    //         return (
    //             <Image style={[styles.icon]} source={require('../assets/images/tab_my.png')}/>
    //     );
    //     },
    // };

    componentWillMount() {
        this.checkLogin();
    }

    // 状态更新，判断是否登录并作出处理
    shouldComponentUpdate(nextProps, nextState) {
        console.warn('状态更新1');
        // 登录完成,切成功登录
        if(nextProps.status == '注销登录') {
            NavigationService.navigate('Login', {});
            // NaivgationUtil.goBack(this.props.navigation);
            //
            // NaivgationUtil.resetToLoginPage({
            //     navigation: this.props.navigation
            // });
            // global.appRootNavigator.navigation.navigate('Login');
            return false;
        }
        // else if(nextProps.status == '已登录') {
        //     NavigationUtil.resetToLoginPage();
        //     return false;
        // }

        return true;
    }

    checkLogin() {
        global.storage.load({
            key: 'user',
            autoSync: false,
        }).then(ret => {
            if (ret && ret.userReginfo) {
                const {logined} = this.props;
                logined(true,ret);
                // this.props.navigation.dispatch(resetAction);
            }
        }).catch(err => {
            // console.warn(err.message);
        });
    }

    logout() {
        const {loginOut} = this.props;
        loginOut('','');
    }

    render() {
        // NaivgationUtil.navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>您好,{this.props.user && this.props.user.userReginfo.userName }!</Text>
                <Text>欢迎使用本产品！</Text>
                <CButton color={'red'} title={'注销'} onPress={() => this.logout()}/>
                <Text>状态: {this.props.status}</Text>
            </View>
        )
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
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user
    }),
    (dispatch) => ({
        loginOut: (m, p) => dispatch(loginAction.loginOut(m, p)),
        logined: (m, p) => dispatch(loginAction.loginSuccess(m, p)),
    })
)(PersonPage)
