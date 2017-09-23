import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export class Create_Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Make a Profile</Text>
        <TextInput
          style={styles.text_field}
          placeholder="Name"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.text_field}
          placeholder="Email"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.text_field}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    paddingVertical: 50
  },
});

export default Create_Profile
