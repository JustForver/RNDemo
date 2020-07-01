import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './common/header';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigate={this.props.navigation} />
        <Text>Hello Test!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Test;
