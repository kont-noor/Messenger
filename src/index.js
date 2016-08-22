import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {Message} from './components/Message';
import {Friends} from './components/Friends';
import {OAuth} from './components/OAuth';

export default class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      access_token: '',
      client_id: 'client_id',
      redirect_uri: 'https://www.facebook.com/connect/login_success.html',
      client_secret: 'client_secret'
    };
  }

  setToken(access_token) {
    this.setState({access_token})
  }

  renderScene(route, navigator) {
    if (this.state.access_token.length > 0)
      switch(route.title) {
        case 'Friends':
          return (<Friends navigator={navigator} access_token={this.state.access_token}/>);
        case 'Messages':
          return (<Message navigator={navigator} friend={route.friend} access_token={this.state.access_token}/>);
        default:
          return(<Friends />);
      }
    else
      return (<OAuth {...this.state} setToken={this.setToken.bind(this)} />);
  }

  render() {
    const routes = [
      {title: 'Friends', index: 0},
      {title: 'Messages', index: 1},
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Messenger</Text>
        <View style={styles.main}>
          <Navigator
            initialRoute={routes[0]}
            renderScene={this.renderScene.bind(this)}
          />
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
