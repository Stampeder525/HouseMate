import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SignUpProfile from './SignUpProfile.js'


export class SignUpBanking extends React.Component {
    static navigationOptions = {
      title: 'SignUpBanking',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Billing Information</Text>
          <TextInput
            style={styles.text_field}
            placeholder="Card Number"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="Exp. Date"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="CVC"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <Text style={styles.title}>Billing Address</Text>
          <TextInput
            style={styles.text_field}
            placeholder="Address"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="City"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="State"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="ZIP"
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <Button
              title="Next"
              onPress={() =>
              navigate('Notifications')
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

export default SignUpBanking;
