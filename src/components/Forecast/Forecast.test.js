import 'react-native';
import React from 'react';
import Forecast from './Forecast.js';
import renderer from 'react-test-renderer';


it('Forecast renders correctly', () => {
  const tree = renderer.create(
    <Forecast
      main="test"
      description="test"
      temp={24.5}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
