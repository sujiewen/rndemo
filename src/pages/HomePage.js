/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Tab from './Tab'
import NaivgationUtil from '../navigator/NavigationUtil';
type Props = {};
export default class HomePage extends Component < Props > {
  render() {
    NaivgationUtil.navigation = this.props.navigation;
    return (
      <Tab></Tab>
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