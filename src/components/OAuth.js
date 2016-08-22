import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export class OAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {displayWeb: true, code: ''};
  }

  fetchAuthToken() {
    params = `client_id=${this.props.client_id}&client_secret=${this.props.client_secret}&code=${this.state.code}&redirect_uri=https://www.facebook.com/dialog/oauth?client_id=${this.props.client_id}&redirect_uri=${this.props.redirect_uri}`;
    fetch(`https://graph.facebook.com/v2.3/oauth/access_token?${params}`)
      .then(response => response.json())
      .then(json => {
        this.props.setToken(json.access_token)
      });
  }

  dispatchCode(x) {
    let url = x.nativeEvent.url;

    if (code_match = url.match(/code=(.*?)#/)) {
      code = code_match[1]

      this.setState({code: code, displayWeb: false}, this.fetchAuthToken);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Login
        </Text>
        {this.state.displayWeb && <WebView
          source={{uri: `https://www.facebook.com/dialog/oauth?client_id=${this.props.client_id}&redirect_uri=${this.props.redirect_uri}`}}
          style={{marginTop: 20, width: 300}}
          onLoadStart={this.dispatchCode.bind(this)}
        />}
      </View>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
