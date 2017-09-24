import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';

import SignUpProfile from './SignUpProfile.js'
import Roulette from 'react-native-roulette'

class NotificationsPanel extends React.Component {
    static navigationOptions = {
      title: 'Notifications',
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.notif_view}>
                    <Text style={styles.notif}>Brad marked "garbage" complete</Text>
                    <Text style={styles.date}>September 23 @ 2pm</Text>
                    <View style={styles.hcontainer}>
                        <Image
                          style={{flex:1}}
                          source={require('./images/check.png')}
                          resizeMode="contain"
                          />
                          <Image
                            style={{flex:1}}
                            source={require('./images/x.png')}
                            resizeMode="contain"
                            />
                    </View>
                </View>
                <View style={styles.notif_view}>
                    <Text style={styles.notif}>You have 4 hours to "cook meal"</Text>
                    <Text style={styles.date}>September 23 @ 11am</Text>
                </View>
                <View style={styles.notif_view}>
                    <Text style={styles.notif}>You have been charged $3 for not completing "run errands"</Text>
                    <Text style={styles.date}>September 22 @ 10pm</Text>
                </View>
                <View style={styles.notif_view}>
                    <Text style={styles.notif}>You have 1 hour to "run errands"</Text>
                    <Text style={styles.date}>September 22 @ 9pm</Text>
                </View>
                <View style={styles.notif_view}>
                    <Text style={styles.notif}>Sarah marked "do dishes" complete</Text>
                    <Text style={styles.date}>September 22 @ 3pm</Text>
                    <View style={styles.hcontainer}>
                        <Image
                          style={{flex:1}}
                          source={require('./images/check.png')}
                          resizeMode="contain"
                          />
                          <Image
                            style={{flex:1}}
                            source={require('./images/x.png')}
                            resizeMode="contain"
                            />
                    </View>
                </View>
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
  hcontainer: {
      display: 'flex',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
  },
  notif: {
      fontSize: 20,
      fontFamily: 'Avenir',
      marginLeft: 10,
      marginTop: 10,
  },
  notif_view: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '20%',
      width: '100%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
  },
  date: {
      fontSize: 12,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      marginLeft: 10,
  }
 });

export default NotificationsPanel
