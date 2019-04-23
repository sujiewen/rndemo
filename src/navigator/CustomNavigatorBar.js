'use strict';

import React, {Component} from 'react'
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
import {unitWidth,width,statusBarHeight,isIphoneX} from  '../common/adapterUtil'

let navigationHeight = 44;

type Props = {};
export default class CustomNavigatorBar extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            navigatorHeight:(Platform.OS === 'ios'?(statusBarHeight+navigationHeight): navigationHeight),
            navigatorWidth:width,
        };
    }

    render() {
        return (
            <View style={{height: this.state.navigatorHeight}}>
                <ImageBackground source={require('../assets/images/nav_bg.png')} resizeMode={'cover'} style={{width:this.state.navigatorWidth, height: this.state.navigatorHeight}}>
                    <View style={{paddingTop:statusBarHeight,height:navigationHeight,width:this.state.navigatorWidth}}>
                        <Text style={{fontSize: 20,color: 'white', textAlign:'center',paddingTop:12,height:navigationHeight}}>通讯录</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    };
}