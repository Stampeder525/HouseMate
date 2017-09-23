import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignUpProfile from './SignUpProfile.js'
import { Button } from 'react-native';


export default class SignUpBanking extends React.Component {

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
            placeholder="Address Line 2"
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
              this.props.navigation.navigate('Notifications')
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
