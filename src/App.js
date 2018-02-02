/**
 * RemindMe App
 * React Native Application for iOS and Android
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import Colors from './theme/colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.remindMeLogo}
          source={require('./images/remindMeLogo.png')}/>
        <TouchableHighlight style={styles.homeButton}>
          <Text style={styles.homeButtonText}>COMENZAR</Text>
        </TouchableHighlight>
        <Image source={require('./images/avatars.png')} />
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  remindMeLogo:{
    marginTop: 80
  },
  homeButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ffffff'
  },
  homeButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  }
});
