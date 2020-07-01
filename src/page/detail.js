import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import HeadTitle from './common/HeadTitle';

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  goAnotherDetail() {
    this.props.navigation.push('Detail');
  }
  render() {
    return (
      <View style={styles.container}>
        <HeadTitle title={'测试'} navigate={this.props.navigation} />
        <TouchableOpacity
          onPress={() => {
            this.goAnotherDetail();
          }}>
          <Text>Hello Detail!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Detail;
