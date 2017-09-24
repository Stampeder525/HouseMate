import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import SignUpNotifs from './SignUpNotifs'

export default class AddPeopleAndTasks extends React.Component {
//the below is not the actual code for this page, had to put placeholder to work
  render() {
    return (
        <Button
            title="Next"
            onPress={() =>
            this.props.navigation.navigate('Banking')
            }
        />
    );
  }
}
