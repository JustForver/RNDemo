import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArr: [],
      _dataPart3: [],
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      refreshing: false,
    };
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default Test;
