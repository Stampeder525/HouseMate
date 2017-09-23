import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Create_Profile from './Create_Profile.js'

export default class App extends React.Component {
  render() {
    return (
      <Create_Profile />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
