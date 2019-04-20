//LoginScreen.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class LoginScreen extends Component{
  static navigationOptions={
    title:'Login'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>{this.props.navigation.navigate('home')}}>去主页
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});