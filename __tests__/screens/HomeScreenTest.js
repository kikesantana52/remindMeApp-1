import 'react-native';
import React from 'react';
import HomeScreen from '../../src/screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let component;
const navigationMock = { navigate: jest.fn() };

describe('Home Screen - ', () => {

  it('should render correctly', () => {
    component = renderer.create(
      <HomeScreen navigation={navigationMock}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

});
