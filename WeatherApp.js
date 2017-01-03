/*
 *  Main weather app react component
 * 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
    };
  }
  _handleTextChange = (event) => {
    console.log(event.nativeEvent.text);
    this.setState({
      zip: event.nativeEvent.text,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={ styles.input }
          onSubmitEditing={ this._handleTextChange }
        />
        <Text style={styles.welcome}>
          You inputted { this.state.zip }.
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});
