import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';

import WheelReact from 'wheel-react';
import SignUpProfile from './SignUpProfile.js'

export class Wheel extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        content: 'Move your mouse mouse wheel or trackpad or try to scroll here!'
      };
      WheelReact.config({
        left: () => {
          this.setState({
            content: 'left direction detected.'
          });
        },
        right: () => {
          this.setState({
            content: 'right direction detected.'
          });
        },
        up: () => {
          this.setState({
            content: 'up direction detected.'
          });
        },
        down: () => {
          this.setState({
            content: 'down direction detected.'
          });
        }
      });
    }
  render() {
    let styles = {
    height: '400px',
    fontSize: '34px',
    textAlign: 'center'
  }
    return (
      <div {...WheelReact.events} tabIndex="1" style={styles}>
        {this.state.content}
      </div>
    );
      }

    };
