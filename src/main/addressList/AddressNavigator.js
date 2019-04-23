'use strict';

import React, {Component} from 'react'
import {
    createMaterialTopTabNavigator, createAppContainer
} from 'react-navigation';

import EnterpriseAddPage from '../EnterpriseAddPage';
import GroupListPage from '../GroupListPage';
import PersonAddPage from '../PersonAddPage';

const Navigator = createMaterialTopTabNavigator({
    PopularTab1:{
        screen: EnterpriseAddPage,
        navigationOptions: {
            tabBarLabel:'企业通讯录'
        }
    },
    PopularTab2:{
        screen: GroupListPage,
        navigationOptions: {
            tabBarLabel:'我的群组'
        }
    },
    PopularTab3:{
        screen: PersonAddPage,
        navigationOptions: {
            tabBarLabel:'个人通讯录'
        }
    }
});

const AddressNavigator = createAppContainer(Navigator);


const Navigator2 = createMaterialTopTabNavigator({
    PopularTab1:{
        screen: EnterpriseAddPage,
        navigationOptions: {
            tabBarLabel:'我的属员'
        }
    },
    PopularTab2:{
        screen: GroupListPage,
        navigationOptions: {
            tabBarLabel:'我的群组'
        }
    },
    PopularTab3:{
        screen: GroupListPage,
        navigationOptions: {
            tabBarLabel:'我的群组'
        }
    },
    PopularTab4:{
        screen: PersonAddPage,
        navigationOptions: {
            tabBarLabel:'个人通讯录'
        }
    }
});

const AddressNavigator2 = createAppContainer(Navigator2);


export default createAppContainer(AddressNavigator);