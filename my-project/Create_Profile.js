import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Create_Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Make a Profile</Text>
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
    justifyContent: 'flex-start',
  },
  title: {
      flex: 2,
      fontSize: 30,
      fontWeight: 'bold',
  },
});

export default Create_Profile
