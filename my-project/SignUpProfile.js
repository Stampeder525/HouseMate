import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';

import SignUpBanking from './SignUpBanking.js'

var api = require('./AccountCreation.js')


class SignUpProfile extends React.Component {
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
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={20}>
          <Image
            style={{flex:1}}
            source={require('./logo.png')}
            resizeMode="contain"
            />
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
                if (this.state.username == "") {
                    return
                }
                this.props.navigation.navigate('Banking')
                api.createAccount(this.state)
            }}
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
      fontSize: 20,
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

export default SignUpProfile;
