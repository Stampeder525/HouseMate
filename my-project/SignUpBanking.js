import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SignUpProfile from './SignUpProfile.js';
import { Button } from 'react-native';
import linkAccount from './billing.js';


export default class SignUpBanking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "code": 0,
        "message": "string",
        "objectCreated": {
          "_id": "string",
          "type": "Credit Card",
          "nickname": "string",
          "rewards": 0,
          "balance": 500,
          "account_number": "string",
          "customer_id": "string"
      }
    };
    this.createLinkAccountPost = this.createLinkAccountPost.bind(this)
  }
  createLinkAccountPost() {
    linkAccount(this.state)
    this.props.navigation.navigate('Notifications')
    
  }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Billing Information</Text>
          <TextInput
            style={styles.text_field}
            placeholder="Customer ID"
            onChangeText={(text) => this.setState({customer_id: text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <TextInput
            style={styles.text_field}
            placeholder="Account Number"
            onChangeText={(text) => this.setState({account_number: text})}
            underlineColorAndroid = 'rgba(0,0,0,0)'
          />
          <Button
              title="Next"
              onPress={
                this.createLinkAccountPost
                
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
