import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
import {quotes} from './data/quotes.js';

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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  };

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      let quote = quotes[Math.floor(Math.random()*quotes.length)];
      PushNotification.localNotificationSchedule({
        message: quote,
        // date: new Date(Date.now()),
        // repeatType: 'time',
        // repeatTime: 28800000, // every 8 hours
        date: new Date(Date.now() + (5 * 1000))
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Jewish Momentum</Text>
        <Text style={styles.welcome}>Daily inspiration delivered straight to your phone.</Text>
        <Text style={styles.welcome}>Created by Rabbi Ben Greenberg</Text>
        <PushController />
      </View>
    )
  }
}
