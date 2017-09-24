import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import Camera from 'react-native-camera';

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
                <Text style={styles.chore}>Vacuum</Text>
                <View style={styles.hcontainer}>
                    <Text style={styles.leftChore}>Do dishes</Text>
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
                    <Text style={styles.rightChore}> Dispose garbage </Text>
                </View>
                <Text style={styles.chore}>Clean counter</Text>
                return({taskCompleted ? <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera> : null}
            </View>
        )
    }
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
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
 });

export default Wheel
