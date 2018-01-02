import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      },
    });
  }
  render() {
    return null
  }
}
