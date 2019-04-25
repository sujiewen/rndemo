import React from 'react';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';


import Tap1 from '../pages/Tab1'
import MessagePage from '../main/MessagePage'
import ContactPage from '../main/ContactPage';
import AttendancePage from '../main/AttendancePage';
import WorksPage from '../main/WorksPage';
import PersonPage from '../main/PersonPage';
import {View, ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'


import {Image, StyleSheet} from "react-native";
import {THEME, THEME_BACKGROUND} from "../assets/css/color";

const TabNavigator = createBottomTabNavigator({
    Message: {
        screen: MessagePage,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <ImageBackground style={[styles.icon]} source={require('../assets/images/tab_message_selected.png')}>
                            <Badge value="99+" status="error" containerStyle={{ position: 'absolute', top: -4, right: -20 }}/>
                        </ImageBackground>
                    );
                }
                return (
                    <Image style={[styles.icon]} source={require('../assets/images/tab_message.png')}/>
                );
            },
        },
    },
    Contact: {
        screen: ContactPage,
        navigationOptions: {
            tabBarLabel: '通讯录',
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image style={[styles.icon]} source={require('../assets/images/tab_addresslist_selected.png')}/>
                    );
                }
                return (
                    <Image style={[styles.icon]} source={require('../assets/images/tab_addresslist.png')}/>
                );
            },
        },
    },
    Works: {
        screen: WorksPage,
        navigationOptions: {
            tabBarLabel: '工作',
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image style={[styles.icon]} source={require('../assets/images/tab_works_selected.png')}/>
                    );
                }
                return (
                    <Image style={[styles.icon]} source={require('../assets/images/tab_works.png')}/>
                );
            },
        },
    },
    AttendancePage : {
        screen: AttendancePage,
        navigationOptions: {
            tabBarLabel: '勤务',
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image style={[styles.icon]} source={require('../assets/images/tab_attendance_selected.png')}/>
                    );
                }
                return (
                    <Image style={[styles.icon]} source={require('../assets/images/tab_attendance.png')}/>
                );
            },
        },
    },
    PersonPage : {
        screen: PersonPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused}) => {
                if (focused) {
                    return (
                        <Image style={[styles.icon]} source={require('../assets/images/tab_my_selected.png')}/>
                    );
                }
                return (
                    <Image style={[styles.icon]} source={require('../assets/images/tab_my.png')}/>
                );
            },
        },
    },
},{
    tabBarPosition: 'bottom', // 标签显示在底部
    tabBarOptions: {
        activeTintColor: 'rgba(150, 149, 244, 1)',//'#191F25',
        inactiveTintColor: 'rgba(25, 31, 37, 0.4)',  //0x9695F4
        style: {
            backgroundColor: THEME,
        },
        tabStyle: {
            paddingTop: 10,
            paddingBottom: 0,
        },
        labelStyle: {
            marginTop: 8,
            marginBottom: 0,
            marginLeft:0
        },
        showIcon: true  // 显示图标
    }
});

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

export default createAppContainer(TabNavigator);