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
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      messages: [],
      messagesList: this.ds.cloneWithRows([])
    };
  }

  send(text) {
    if (text.length == 0)
      return;

    console.log(text);
    this.setState({
      messages: [text, ...this.state.messages],
      messagesList: this.ds.cloneWithRows([text, ...this.state.messages]),
      text: ''
    });
  }

  friendName() {
    console.log('friend name');
    console.log(this.props);
    if (this.props.friend)
      return this.props.friend.props.attrs.name;
  }

  render() {
    return (
      <View style={{padding: 10}}>
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
