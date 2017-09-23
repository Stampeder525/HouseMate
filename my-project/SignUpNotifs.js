import React from 'react';
import CheckBox from 'react-native-modest-checkbox'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native';

export default class SignUpNotifs extends React.Component {
    static navigationOptions = {
      title: 'SignUpNotifs',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>What notifications do you want? Select all that apply. </Text>
            <CheckBox
            label='Push Notifications'
            onChange={(checked) => console.log('Checked!')}
            />
            <CheckBox
            label='Text'
            onChange={(checked) => console.log('Checked!')}
            />
            <CheckBox
            label='Email'
            onChange={(checked) => console.log('Checked!')}
            />

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
  },
  text_field: {
    backgroundColor: '#eeeeee',
    height: 40,
    width: '100%',
    textAlign: 'center',
    marginVertical: 6,
    paddingVertical: 7,
    fontSize: 18,
    flex: 0,
  },
});
