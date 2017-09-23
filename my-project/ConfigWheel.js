import React from 'react';
import CheckBox from 'react-native-modest-checkbox'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native';

export default class ConfigWheel extends React.Component {
    static navigationOptions = {
      title: 'ConfigWheel',
    };
    render() {
      return (
          <View style={styles.container}>
            <View style={styles.subcontainer}>
              <Text style={styles.title}>Add a person</Text>
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
            <View style={styles.subcontainer}>

            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  subcontainer: {
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex: 1,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
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
