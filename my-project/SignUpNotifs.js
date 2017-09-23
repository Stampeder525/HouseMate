import React from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native';

export default class SignUpNotifs extends React.Component {
    static navigationOptions = {
      title: 'SignUpNotifs',
    };
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>What Kind of Notifications do you Want? Select all that apply. </Text>
          <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(data)}
                isChecked={data.checked}
                leftText='Push Notifications'
            />;
            <CheckBox
                label='Text'
                checked={false}
                onChange={(checked) => console.log('I am checked', checked)}
             />
             <CheckBox
                 label='Email'
                 checked={false}
                 onChange={(checked) => console.log('I am checked', checked)}
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
