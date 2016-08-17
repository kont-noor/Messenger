/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {Message} from './Message.js';

class Messenger extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Messenger</Text>
        <View style={styles.main}>
          <Message />
        </View>
        <Text style={styles.copyright}>© Cats-3x, 2016</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ccc',
    padding: 20
  },
  main: {
    flex: 1,
    padding: 5
  },
  copyright: {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#ccc',
    fontSize: 8,
    padding: 5
  },
});

AppRegistry.registerComponent('Messenger', () => Messenger);
