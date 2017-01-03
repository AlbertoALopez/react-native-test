/*
 * Tests for main WeatherApp component
 */

import 'react-native';
import React from 'react';
import WeatherApp from './WeatherApp.js';
import renderer from 'react-test-renderer';


it('WeatherApp renders correctly', () => {
    const tree = renderer.create(
        <WeatherApp />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
