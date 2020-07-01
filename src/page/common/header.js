import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import container from '../../utils/container';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  openDraw() {
    this.props.navigate.openDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            this.openDraw();
          }}>
          <Image source={require('../../assets/images/btn-left.png')} />
        </TouchableOpacity>
        <ImageBackground
          source={require('../../assets/images/head-bd.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    top: container.screenHeight * 0.025,
    left: 10,
    zIndex: 2,
  },
  logo: {
    width: container.screenWidth,
    height: container.screenHeight * 0.08,
  },
});

export default Header;
