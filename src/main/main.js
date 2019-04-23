import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {THEME} from '../assets/css/color';
import MessagePage from './MessagePage';
import ContactPage from './ContactPage';
import AttendancePage from './AttendancePage';
import WorksPage from './WorksPage';
import PersonPage from './PersonPage';

export const MainNavigator = createBottomTabNavigator({
        Message: {screen: MessagePage}, // 消息
        Contact: {screen: ContactPage}, // 通讯录
        Work: {screen: WorksPage},     // 工作
        Attendance: {screen: AttendancePage}, // 勤务
        Person: {screen: PersonPage} // 个人
    }, {
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
                marginBottom: 0
            },
            showIcon: true  // 显示图标
        }
    }
);