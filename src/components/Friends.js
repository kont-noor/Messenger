import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = { friends: [] };
    this.fetchFriends();
  }

  fetchFriends() {
    fetch(`https://graph.facebook.com/me/friends?access_token=${this.props.access_token}`)
      .then(response => response.json())
      .then(json => this.setState({friends: json.data}));
  }

  conversation(friend){
    this.props.navigator.push({
      title: 'Messages',
      friend
    })
  }

  render() {
    return (
      <View>
        {this.state.friends.map(friend => <Person key={friend.id} attrs={friend} friends={this}/>) }
      </View>
    )
  }
}

class Person extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: []
    };
  }

  setCurrent() {
    this.props.friends.conversation(this);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.setCurrent.bind(this)}>
        <View>
          <Image
            source={{uri: 'https://pp.vk.me/c630130/v630130920/437dc/PYAbX_sMCWY.jpg'}}
            style={{width: 50, height: 50}}
          />
          <Text>{this.props.attrs.name}</Text>
        </View>
      </TouchableHighlight>
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
  }
});
