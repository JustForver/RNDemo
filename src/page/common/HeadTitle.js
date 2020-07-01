import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import container from '../../utils/container';

class HeadTitle extends Component {
  constructor(props) {
    super(props);
  }
  goBack() {
    this.props.navigate.goBack();
  }
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.backBtn}
          onPress={() => {
            this.goBack();
          }}
          activeOpacity={0.5}
          underlayColor={'#DDDDDD'}>
          <View style={styles.left}>
            <View style={styles.allowLeft} />
          </View>
        </TouchableHighlight>
        <View style={styles.titleBody}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: container.screenWidth,
    height: container.screenHeight * 0.08,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  allowLeft: {
    width: 15,
    height: 15,
    marginLeft: 7,
    borderColor: 'black',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    transform: [{rotateZ: '45deg'}],
  },
  titleBody: {
    flex: 0.88,
    color: '#000',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
  },
  backBtn: {
    flex: 0.12,
  },
});

export default HeadTitle;
