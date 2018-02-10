import 'react-native';
import React from 'react';
import Task from '../../src/components/Task';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let component;
const toogleTaskMock = jest.fn();

describe('Task Component - ', () => {

  it('should render correctly', () => {
    component = renderer.create(
      <Task
        id={1}
        title={'Test Components'}
        toggleTask={toogleTaskMock}
        completed={false}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render completed state correctly', () => {
    component = renderer.create(
      <Task
        id={1}
        title={'Test Components'}
        toggleTask={toogleTaskMock}
        completed={true}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

});
