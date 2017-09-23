import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';

import SignUpBanking from './SignUpBanking.js'

var api = require('./AccountCreation.js')


export class SignUpProfile extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Make a Profile</Text>
        <TextInput
          style={styles.text_field}
          placeholder="Name"
          onChangeText={(text) => {this.setState({name: text})}}
          underlineColorAndroid = 'rgba(0,0,0,0)'
        />
        <TextInput
          style={styles.text_field}
          placeholder="Username"
          onChangeText={(text) => {this.setState({username: text})}}
          underlineColorAndroid = 'rgba(0,0,0,0)'
        />
        <TextInput
          style={styles.text_field}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(text) => {this.setState({email: text})}}
          underlineColorAndroid = 'rgba(0,0,0,0)'
        />
        <TextInput
          style={styles.text_field}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.text_field}

          placeholder="Confirm Password"
          onChangeText={(text) => this.setState({confirmPassword: text})}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          secureTextEntry={true}
        />
        <Button
            title="Next"
            onPress= {() => {
                this.props.navigation.navigate('Banking')
                api.createAccount(this.state)
            }}
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

export default SignUpProfile;
