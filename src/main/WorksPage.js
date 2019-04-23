import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {THEME_BACKGROUND} from '../assets/css/color';


class WorksPage extends Component {
    // static navigationOptions = {
    //     tabBarLabel: '公务',
    //     tabBarIcon: ({focused}) => {
    //         if (focused) {
    //             return (
    //                 <Image style={[styles.icon]} source={require('../assets/images/tab_works_selected.png')}/>
    //         );
    //         }
    //         return (
    //             <Image style={[styles.icon]} source={require('../assets/images/tab_works.png')}/>
    //     );
    //     },
    // };
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>欢迎来到公务！</Text>
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
        user: state.user
    }),
    (dispatch) => ({})
)(WorksPage)