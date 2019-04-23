/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation'

import Top from './Top'
type Props = {};
export default class PopularPage extends Component <Props> {
  render() {
    return (
        <SafeAreaView style={{ flex: 1 }}
                      forceInset={{ horizontal: 'always', top: 'always' }}>
          <Top></Top>
        </SafeAreaView>
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
