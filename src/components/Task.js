/**
 * RemindMe App
 * Task Component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  View
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';

const screen = Dimensions.get('window');

export default class Task extends Component<{}> {

  constructor(props){
    super(props);
  }

  render() {

    const { id, title } = this.props;
    let { completed } = this.props;
    let icon = completed ? require('./../images/icon-checked.png') : require('./../images/icon-circle.png');

    return (
        <TouchableHighlight
            style={styles.touchableArea}
            underlayColor={Colors.touchableHover}
            onPress={ () => { this.props.toggleTask(id) } }>
          <View style={styles.container}>
            <Image
              style={styles.iconUnchecked}
              source={icon}/>
            <Text style={ completed ? styles.taskCompletedText : styles.taskText }>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
touchableArea:{
  height: 60
},
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: Colors.separator
  },
  iconUnchecked: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 4
  },
  taskText: {
    ...Typografy.avenirFont,
    color: Colors.primaryText,
    fontSize: 21,
  },
  taskCompletedText: {
    ...Typografy.avenirFont,
    fontSize: 21,
    color: Colors.gray
  }
});
