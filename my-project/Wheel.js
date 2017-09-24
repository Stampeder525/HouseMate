import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';

import SignUpProfile from './SignUpProfile.js'
import Roulette from 'react-native-roulette'

class Wheel extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true
        this.state = { taskCompleted : false }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.notifications}>
                    <Button
                        title="Notifications"
                        onPress= {() => {
                            this.props.navigation.navigate('NotifPanel')
                        }}
                    />
                    <Button color = {this.state.taskCompleted ? '#2ecc71' : '#e74c3c'}
                        title= {this.state.taskCompleted ? "Task Complete!" : "Mark my task completed"}
                        onPress= {() => {
                            this.setState({taskCompleted : !this.state.taskCompleted})
                        }}
                    />
                </View>
                <Text style={styles.chore}>cook meal</Text>
                <View style={styles.hcontainer}>
                    <Text style={styles.leftChore}>do dishes</Text>
                    <Roulette rouletteRotate={0}
                    enableUserRotate = {true} >
                        <Image
                          ref="icon"
                          style={{flex:1}}
                          source={require('./images/boy.png')}
                          resizeMode="contain"
                          />
                         <Image
                          ref="icon"
                            style={{flex:1}}
                            source={require('./images/girl.png')}
                            resizeMode="contain"
                            />
                        <Image
                              ref="icon"
                              style={{flex:1}}
                              source={require('./images/boy.png')}
                              resizeMode="contain"
                              />
                        <Image
                              ref="icon"
                                style={{flex:1}}
                                source={require('./images/girl.png')}
                                resizeMode="contain"
                                />
                    </Roulette>
                    <Text style={styles.rightChore}> garbage </Text>
                </View>
                <Text style={styles.chore}>run errands</Text>
            </View>
        )
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
  notifications: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  hcontainer: {
      display: 'flex',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
  },
  chore: {
      fontSize: 16,
      height: 20,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
  },
  leftChore: {
      fontSize: 16,
      height: 20,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      transform: [{ rotate: '270deg'}],
  },
  rightChore: {
      fontSize: 16,
      height: 20,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      transform: [{ rotate: '90deg'}],
  },
  wheel: {
      width: '50%'
  }
 });

export default Wheel
