import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class DetailScreen extends Component{
 
  static navigationOptions ={
    title:'详情'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>detail页面</Text>
        <Text>hello,{this.props.navigation.state.params.name}</Text>
        <Text onPress={()=>{this.props.navigation.state.params.callBack('我很好')}}>回调函数</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});