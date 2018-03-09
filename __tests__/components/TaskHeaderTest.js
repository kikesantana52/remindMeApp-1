import 'react-native';
import React from 'react';
import TaskHeader from '../../src/components/TaskHeader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//Mock Data
const MockDate = require('mockdate');
      MockDate.set('2018-01-10T12:00:00'),
      taskToBeCompleted = 10,
      TaskHeaderClass = new TaskHeader({taskToBeCompleted});

describe('Task Header Component - ', () => {

  afterAll( () => {
    MockDate.reset();
  });

  it('should render correctly', () => {
    const component = renderer.create(
      <TaskHeader taksToBeCompleted={ taskToBeCompleted }/>
    ).toJSON();
    expect(component).toMatchSnapshot();
    expect(TaskHeaderClass.props.taskToBeCompleted).toBe(taskToBeCompleted);
  });

  it('should generate date with format', () => {
    expect(TaskHeaderClass.getFormatedDate()).toBe('JUEVES 10 DE ENERO DE 2018');
  });

});
