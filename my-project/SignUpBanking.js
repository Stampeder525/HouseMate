import React from 'react';
import { StyleSheet, Text, TextInput, View, Picker, KeyboardAvoidingView } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SignUpProfile from './SignUpProfile.js';
import { Button } from 'react-native';

export default class SignUpBanking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'Capital One'
        };
    }
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={20}>
          <Text style={styles.title}>Billing Information</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ width: '90%' }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Capital One" value="Capital One" />
            <Picker.Item label="Citibank" value="Citibank" />
            <Picker.Item label="Bank of America" value="Bank of America" />
            <Picker.Item label="Wells Fargo" value="Wells Fargo" />
          </Picker>
          <TextInput
            style={styles.text_field}
            placeholder="Customer ID"
            onChangeText={(text) => this.setState({customer_id: text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="Password"
            onChangeText={(text) => this.setState({customer_id: text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
            secureTextEntry={true}
          />
          <TextInput
            style={styles.text_field}
            placeholder="Account Number"
            onChangeText={(text) => this.setState({account_number: text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <Button
              title="Next"
              onPress={ () =>
                this.props.navigation.navigate('Notifications')

              }
          />
        </KeyboardAvoidingView>
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
      height: 50,
      fontFamily: 'Avenir',
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
    fontFamily: 'Avenir',
  },
});
