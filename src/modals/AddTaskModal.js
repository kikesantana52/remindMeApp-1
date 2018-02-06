/**
 * RemindMe App
 * Add Task Modal
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  View,
  TextInput,
} from 'react-native';

import Colors from './../theme/colors';

const screen = Dimensions.get('window');

export default class AddTaskModal extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      taskText: ''
    }
  }

  addTask(){
    if(this.state.taskText !== ''){
      this.props.addTask(this.state.taskText);
    }else{
      //TODO: show an alert to the user!
    }
  }

  render() {

    return (
      <View style={styles.modalContainer}>
        <View style={styles.wrapperContainer}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.remindMeLogo}
              source={require('./../images/remindMe-logo.png')}/>
          </View>
          <View style={styles.bodyContainer}>
              <Text style={styles.addTaskText}>Agregar Tarea</Text>
              <TextInput
                style={styles.inputText}
                placeholder="Nombre de la tarea"
                onChangeText={ (text) => this.setState({taskText: text}) }/>
              <TouchableHighlight
                style={styles.addButton}
                underlayColor={Colors.touchableHover}
                onPress={ ()=> { this.addTask() } }>
                <Text style={styles.addButtonText}>AGREGAR</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.cancelButton}
                underlayColor={Colors.touchableHover}
                onPress={ ()=>{ this.props.closeAddTaskModal() } }>
                <Text style={styles.cancelButtonText}>CANCELAR</Text>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  wrapperContainer: {
    backgroundColor: 'white',
    height: 567
  },
  headerContainer:{
    flex: 1,
    height: 242,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColorDarker
  },
  remindMeLogo:{
    width: 285,
  },
  bodyContainer: {
    flex: 1,
    height: 315,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  addTaskText: {
    fontFamily: 'Avenir',
    fontSize: 16,
    textAlign: 'center'
  },
  inputText:{
    fontFamily: 'Avenir',
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.separator
  },
  addButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      backgroundColor: Colors.primaryColorDarker,
      borderColor: Colors.primaryColorDarker
  },
  addButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  },
  cancelButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      backgroundColor: 'white',
      borderColor: Colors.primaryColorDarker
  },
  cancelButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: Colors.primaryColorDarker
  }
});
