import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';

import SignUpBanking from './SignUpBanking.js'

export class SignUpProfile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Make a Profile</Text>
        <TextInput
          style={styles.text_field}
          placeholder="Name"
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid = 'rgba(0,0,0,0)'
        />
        <TextInput
          style={styles.text_field}
          placeholder="Email"
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid = 'rgba(0,0,0,0)'
        />
        <TextInput
          style={styles.text_field}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.text_field}

          placeholder="Confirm Password"
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          secureTextEntry={true}
        />
        <Button
            title="Next"
            onPress={() =>
            this.props.navigation.navigate('Banking')
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

export default SignUpProfile;
