import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignUpProfile from './SignUpProfile.js';
import SignUpBanking from './SignUpBanking.js';
import SignUpNotifs from './SignUpNotifs.js';
import Wheel from './Wheel.js';

class App extends React.Component {
  render() {
    return (
      <SignUpProfile />
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

const AppNav = StackNavigator({
  WheelScreen: { screen: Wheel },
  Profile: { screen: SignUpProfile },
  Banking: { screen: SignUpBanking },
  Notifications: { screen: SignUpNotifs }
});

export default AppNav;
