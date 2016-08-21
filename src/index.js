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

export default class Messenger extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    console.log(route);
    console.log(navigator);

    switch(route.title) {
      case 'Friends':
        return (<Friends navigator={navigator}/>);
      case 'Messages':
        return (<Message navigator={navigator} friend={route.friend}/>);
      default:
        return(<Friends />);
    }
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
            renderScene={this.renderScene}
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