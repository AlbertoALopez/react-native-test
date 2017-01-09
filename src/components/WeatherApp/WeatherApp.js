/*
 *  Main weather app react containers
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
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
  backdrop: {
    resizeMode: 'cover',
    flex: 1,
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
      <Image
        source={require('./img/rain.png')}
        style={styles.backdrop}
      >
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current weather for
            </Text>
            <View style={styles.zipContainer}>
              <TextInput
                style={[styles.zipCode, styles.mainText]}
                returnKeyType="go"
                onSubmitEditing={this.handleTextChange}
              />
            </View>
          </View>
          <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}
          />
        </View>
      </Image>
    );
  }
}
