import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class AppInfoScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'appInfoPage',
    };

    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity
                    
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                >
                 <Text >侧栏</Text>
                </TouchableOpacity>
                <Text style={styles.text}>APP 信息展示页</Text>
            </View>
        );
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