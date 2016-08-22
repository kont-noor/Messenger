import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export class Message extends Component {
  constructor(props) {
    super(props);

    this.fetchMessages();
    messages = this.props.friend.state.messages;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      messages,
      messagesList: this.ds.cloneWithRows(messages)
    };
  }

  fetchMessages() {
    fetch(`https://graph.facebook.com/me/conversations?access_token=${this.props.access_token}`)
      .then(response => response.json())
      .then(json => console.log(json));
  }

  send(text) {
    if (text.length == 0)
      return;

    this.props.friend.setState({
      messages: [text, ...this.state.messages]
    });

    this.setState({
      messages: [text, ...this.state.messages],
      messagesList: this.ds.cloneWithRows([text, ...this.state.messages]),
      text: ''
    });
  }

  friendName() {
    return this.props.friend.props.attrs.name;
  }

  back(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <View style={styles.send}>
          <TouchableHighlight onPress={this.back.bind(this)}>
            <Text style={styles.sendText}>Back</Text>
          </TouchableHighlight>
        </View>
        <Text>{this.friendName()}</Text>

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

        <ListView
          enableEmptySections={true}
          dataSource={this.state.messagesList}
          renderRow={row => <Text>{row}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  send: {
    borderWidth: 1,
    width: 100,
    height: 20
  },
  sendText: {
    textAlign: 'center',
  }
})
