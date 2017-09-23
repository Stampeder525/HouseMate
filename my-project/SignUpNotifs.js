import React from 'react';
import { ListOfCheckbox } from 'react-native-checkbox-list'; //Not sure if installation worked
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SignUpBanking from './SignUpBanking.js'
import { Button } from 'react-native';

export default class SignUpNotifs extends React.Component {
    static navigationOptions = {
      title: 'SignUpNotifs',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>What Kind of Notifications do you Want? Select all that apply. </Text>
          <ListOfCheckbox arrayCheckBox={[
              {
                  label: 'Push Notifications',
                  labelLeft: true,
                  value: 'Push Notifications',
                  styleCheckBox: { width: 30, height: 30, borderWidth: 2, borderColor:'#000' },
                  styleLabel: { color: '#000', fontSize: 20 }
              },
              {
                  label: 'Text',
                  labelLeft: true,
                  value: 'Text',
                  styleCheckBox: { width: 30, height: 30, borderWidth: 2, borderColor:'#000' },
                  styleLabel: { color: '#000', fontSize: 20 }
              },
              {
                  label: 'Email',
                  labelLeft: true,
                  value: 'Push Notifications',
                  styleCheckBox: { width: 30, height: 30, borderWidth: 2, borderColor:'#000' },
                  styleLabel: { color: '#000', fontSize: 20 }
              }
          ]}
          />
          <Button
              title="Finish"
              onPress={() =>
              navigate('Banking') //change to chore wheel selection
              }
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
      height: 50,
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
