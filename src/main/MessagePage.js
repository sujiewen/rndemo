import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {THEME_BACKGROUND} from '../assets/css/color';
import CustomNavigatorBar from "../navigator/CustomNavigatorBar";
import NaivgationUtil from  '../navigator/NavigationUtil'
import { Avatar, Badge, Icon, withBadge,Header } from 'react-native-elements'

type Props = {};
class MessagePage extends Component<Props> {
    // static navigationOptions = {
    //     tabBarLabel: '消息',
    //     tabBarIcon: ({focused}) => {
    //         if (focused) {
    //                 return (
    //                     <Image style={[styles.icon]} source={require('../assets/images/tab_message_selected.png')}/>
    //             );
    //         }
    //         return (
    //             <Image style={[styles.icon]} source={require('../assets/images/tab_message.png')}/>
    //     );
    //     },
    //     // tabBarIcon: ({tintColor}) => (
    //     //     <Image
    //     //         source={require('../assets/images/tab_message.png')}
    //     //         style={[styles.icon, {tintColor: tintColor}]}
    //     //     />
    //     // ),
    // };
    render() {


        // global.storage.load({
        //     key: 'user',
        //     autoSync: false,
        // }).then(ret => {
        //     if (ret) {
        //        this.user = ret;
        //     }
        // }).catch(err => {
        //     // console.warn(err.message);
        // });

        console.log(this.props.user);
        console.log(this.props.user);

        return (
            <View style={{flex: 1}}>

                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    centerComponent={{ text: '消息', style: { color: '#fff',fontSize:20} }}
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        justifyContent: 'space-around',
                    }}
                    backgroundImage={require('../assets/images/nav_bg.png')}
                />

                <Text style={{fontSize: 20}}>  欢迎来到消息！</Text>
                <Text style={{marginTop:100,alignItems: 'center'}} onPress={() => {
                    NaivgationUtil.goPage({
                        navigation: this.props.navigation
                    }, "DetailPage")
                }}>跳转到详情页</Text>
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
        alignItems: 'center',
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({})
)(MessagePage)