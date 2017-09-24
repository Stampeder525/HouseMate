import React from 'react';
import CheckBox from 'react-native-modest-checkbox'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button, Image } from 'react-native';

export default class ConfigWheel extends React.Component {
    static navigationOptions = {
      title: 'Configure Wheel',
    };
    constructor(props) {
        super(props);
        this.state = {
            person1: '',
            person2: '',
            person3: '',
            person4: '',
            task1: '',
            task2: '',
            task3: '',
            task4: ''
        };
    }
    render() {
      return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
                <View style={styles.subcontainer}>
                    <View style={styles.hcontainer}>
                        <Text style={styles.title}>Add a person</Text>
                        <Image
                            style={{flex:1}}
                            source={require('./images/people_plus.png')}
                            resizeMode="contain"
                            />
                        <Image
                            style={{flex:1}}
                            source={require('./images/people_minus.png')}
                            resizeMode="contain"
                            />
                    </View>
                    <TextInput
                      style={styles.text_field}
                      placeholder="Person #1"
                      onChangeText={(text) => this.setState({person1: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <TextInput
                      style={styles.text_field}
                      placeholder="Person #2"
                      onChangeText={(text) => this.setState({person2: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <TextInput
                      style={styles.text_field}
                      placeholder="Person #3"
                      onChangeText={(text) => this.setState({person3: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <TextInput
                      style={styles.text_field}
                      placeholder="Person #4"
                      onChangeText={(text) => this.setState({person4: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                </View>
                <View style={styles.subcontainer}>
                    <TextInput
                      style={styles.text_field}
                      placeholder="Task #1"
                      onChangeText={(text) => this.setState({task1: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <TextInput
                      style={styles.text_field}
                      placeholder="Task #2"
                      onChangeText={(text) => this.setState({task2: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <TextInput
                      style={styles.text_field}
                      placeholder="Task #3"
                      onChangeText={(text) => this.setState({task3: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <TextInput
                      style={styles.text_field}
                      placeholder="Task #4"
                      onChangeText={(text) => this.setState({task4: text})}
                      underlineColorAndroid = 'rgba(0,0,0,0)'
                    />
                    <Button
                        title="Next"
                        onPress={() =>
                        this.props.navigation.navigate('Wheel')
                        }
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  hcontainer: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      flexDirection: 'row',
      margin: 15,
  },
  subcontainer: {
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
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
