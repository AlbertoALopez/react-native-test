/*
 *  React component that contains all the forecast rendering
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  bigText: {
    // flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
  mainText: {
    // flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default class Forecast extends Component {
  static propTypes = {
    main: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    temp: React.PropTypes.number.isRequired,
  }

  render() {
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp} C
        </Text>
      </View>
    );
  }
}
