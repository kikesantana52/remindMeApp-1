/**
 * RemindMe App
 * Tasks Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
  View,
  ScrollView,
} from 'react-native';
import TaskHeader from './../components/TaskHeader';
import Task from './../components/Task';
import Colors from './../theme/colors';

const screen = Dimensions.get('window');

export default class TasksScreen extends Component<{}> {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        { id: 1, title: 'Desayuno de trabajo', completed: false },
        { id: 2, title: 'Desarrollar App', completed: false },
        { id: 3, title: 'Diseñar Mocks', completed: true },
        { id: 4, title: 'Exportar Assets', completed: false },
        { id: 5, title: 'Enviar correos', completed: true },
        { id: 6, title: 'Implementar modal', completed: false },
      ]
    }
  }

  openAddTaskModal(){
    this.props.navigation.navigate('Tasks');
  }

  calcultateToBeCompletedTasks(tasks){
    let toBeCompleted = 0;
    tasks.forEach( task => {
      if(!task.completed){
        toBeCompleted++;
      }
    });
    return toBeCompleted;
  }

  toggleTask(taskId){
    let tasks = [...this.state.tasks];
    let currentTask = tasks.find( task => task.id === taskId );
    currentTask.completed = !currentTask.completed;
    this.setState( tasks );
  }

  renderTasks(tasks){
    return tasks.map( task => {
      return (<Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                toggleTask={this.toggleTask.bind(this)}/>)
    });

  }

  render() {

    return (
      <View style={styles.container}>
        <TaskHeader taksToBeCompleted={ this.calcultateToBeCompletedTasks(this.state.tasks) }/>
        <ScrollView style={styles.tasksContainer}>
          {this.renderTasks(this.state.tasks)}
        </ScrollView>
        <TouchableHighlight
          style={ styles.addTaskButton }
          underlayColor={Colors.primaryColorDarker}
          onPress={ this.openAddTaskModal.bind(this) }>
          <Image
            style={styles.addTaskButtonIcon}
            source={require('./../images/icon-plus.png')}/>
        </TouchableHighlight>
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  tasksContainer: {
    flex: 1,
    width: screen.width
  },
  addTaskButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    height: 66,
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 72,
    backgroundColor: Colors.primaryColor
  },
  addTaskButtonIcon: {
    width: 28,
    height: 28
  }
});
