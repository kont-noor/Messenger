/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

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

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', messages: []};
  }

  send(text) {
    if (text.length == 0)
      return;

    console.log(text);
    this.setState({messages: [text, ...this.state.messages], text: ''});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Message"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />

        <View style={styles.send}>
          <TouchableHighlight onPress={this.send.bind(this, this.state.text)}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableHighlight>
        </View>

        {this.state.messages.map((m, i) => <Text key={i}>{m}</Text>)}
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
  send: {
    borderWidth: 1,
    width: 100,
    height: 20
  },
  sendText: {
    textAlign: 'center',
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
