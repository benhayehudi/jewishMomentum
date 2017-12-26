import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';

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
});

componentDidMount() {
  AppState.addEventListener('change', this.handleAppStateChange);
}

componentWillUnmount() {
  AppState.removeEventListener('change', this.handleAppStateChange);
}

handleAppStateChange(appState) {
  if (appState === 'background') {
    // TODO: Schedule background notifications
    console.log('jewishMomentum is running in the background.');
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Jewish Momentum
          Daily inspiration delivered straight to your phone.
          Created by Rabbi Ben Greenberg
        </Text>
      </View>
    )
  }
}
