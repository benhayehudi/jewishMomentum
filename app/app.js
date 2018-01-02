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
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 35,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 10,
    paddingBottom: 40,
  },
  intro: {
    fontSize: 20,
    margin: 20,
    padding: 20,
    color: "#FFFFFF",
  },
  contact: {
    fontSize: 14,
    margin: 10,
    color: '#FFFFFF',
    paddingTop: 30
  }
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
      PushNotification.localNotificationSchedule({
        message: quotes[Math.floor(Math.random()*quotes.length)],
        date: new Date(Date.now()),
        repeatType: 'time',
        repeatTime: 57600000, // every 16 hours
        //date: new Date(Date.now() + (5 * 1000))
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Jewish Momentum</Text>
        <Text style={styles.intro}>Daily inspiration delivered straight to your phone. Receive a notification twice a day containing a pearl of Jewish wisdom to inspire you and motivate you.</Text>
        <Text style={styles.contact}>Made with &hearts;</Text>
        <Text style={styles.contact}>Rabbi Ben Greenberg (http://reactiverabbi.io)</Text>
        <PushController />
      </View>
    )
  }
}
