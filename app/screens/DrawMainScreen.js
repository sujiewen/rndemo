//drawMainScreen.js
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


export default class DrawMainScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity
                    
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                >
                 <Text >侧栏</Text>
                </TouchableOpacity>
                <Text style={styles.text}>首页</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        backgroundColor: 'pink',
        fontSize: 15,
    },
    btn: {
        backgroundColor: 'red',
        color: 'blue',
        width: 60,
        height: 44,
        marginTop: 115,
        marginLeft: 100
    },
    icon: {
        width: 22,
        height: 22
    }
})