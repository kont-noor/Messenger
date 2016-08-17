import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export class Friends extends Component {
  conversation(friend){
    console.log(this)
    this.props.navigator.push({
      title: 'Messages',
      friend
    })
  }

  render() {
    let friends = [
      {
        pic: {
          uri: 'https://pp.vk.me/c630130/v630130920/437dc/PYAbX_sMCWY.jpg'
        },
        name: 'Tamila',
      },
      {
        pic: {
          uri: 'https://pp.vk.me/c617219/v617219002/1e238/GucMz0baT80.jpg'
        },
        name: 'Dima'
      }
    ];

    return (
      <View>
        {friends.map(friend => <Person key={friend.name} attrs={friend} friends={this}/>) }
      </View>
    )
  }
}

class Person extends Component {
  setCurrent() {
    console.log(this.props.attrs.name);
    this.props.friends.conversation(this);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.setCurrent.bind(this)}>
        <View>
          <Image
            source={this.props.attrs.pic}
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
