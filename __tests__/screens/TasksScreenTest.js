import 'react-native';
import React from 'react';
import TasksScreen from '../../src/screens/TasksScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// instanciar para llamar funciones/variables y estados
const Screen = new TasksScreen();
let component;
const navigationMock = { navigate: jest.fn() };

describe('Tasks Screen - ', () => {
  // Que si entre al screen y reenderie bien
  it('should render correctly', () => {
    component = renderer.create(
      <TasksScreen navigation={navigationMock}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should change state to true',()=>{
    const obj = new TasksScreen();
    obj.openAddTaskModal();
    let resp = [...obj.state.showAddTaskModal];
    expect(resp).toBeTruthy();

  });

  it('should change state to false',()=>{
    const obj = new TasksScreen();
    obj.closeAddTaskModal();
    let resp = obj.state.showAddTaskModal;
    expect(resp).toBeFalsy();

  });

  it('should say how much tasks are need to be completed',()=>{
    let tasks= [...Screen.state.tasks];
    expect(Screen.calcultateToBeCompletedTasks(tasks)).toEqual(3);
  });

  it('should toogle the flag of completed of the task that I use',()=>{
    Screen.toggleTask(1);
    let tasks= [...Screen.state.tasks];
    expect(Screen.calcultateToBeCompletedTasks(tasks)).toEqual(2);
  });

  it('should add a task',()=>{
    const obj = new TasksScreen();
    obj.addTask("Pasear el perro");
    console.log(obj.state.tasks);
    expect(Object.keys(obj.state.tasks).length).toEqual(4);
  });


});
