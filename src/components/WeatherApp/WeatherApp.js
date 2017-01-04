/*
 *  Main weather app react containers
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Forecast from '../Forecast/Forecast';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    alignSelf: 'stretch',
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

export default class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'Slightly cloudy',
        temp: 24.1,
      },
    };
  }
  handleTextChange = (event) => {
    console.log(event.nativeEvent.text);
    this.setState({
      zip: event.nativeEvent.text,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You inputted {this.state.zip}.
        </Text>
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          onSubmitEditing={this.handleTextChange}
        />
      </View>
    );
  }
}
