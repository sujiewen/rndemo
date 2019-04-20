import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    Image
} from 'react-native';

export default class Setting extends React.Component {
    static navigationOptions = {
        drawerLabel: 'setting',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.btn}
                    title={'侧栏'}
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
                />
                <Text style={styles.text}>设置页</Text>
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