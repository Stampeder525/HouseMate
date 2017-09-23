import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import { StackNavigator } from 'react-navigation';

import SignUpProfile from './SignUpProfile.js';
import SignUpBanking from './SignUpBanking.js';
import SignUpNotifs from './SignUpNotifs.js';
import ConfigWheel from './ConfigWheel.js';


class App extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    constructor(props) {
        super(props);
        console.log("FJSLDKFJKLSDJF");
    }
  render() {
      return(
          <View style={styles.container}>
            <Button
            title="Next"
            onPress={() => {
                this.props.navigation.navigate('Profile')
            }}>
            </Button>
          </View>
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
    App: { screen: App },
  Profile: { screen: SignUpProfile },
  Banking: { screen: SignUpBanking },
  Notifications: { screen: SignUpNotifs },
  ConfigWheel: { screen: ConfigWheel }
});

export default AppNav;
