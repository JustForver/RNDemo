import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import container from '../utils/container';
import HeadTitle from './common/HeadTitle';

const Mock = require('mockjs');
const Random = Mock.Random;

class ScenicPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    let px1 = Math.random() * 1000 + 1000,
      px2 = Math.random() * 1000 + 1000;
    const img = Random.image(px1 + 'x' + px2, '#50B347', '#FFF', 'MOCK.JS');
    return (
      <View style={styles.container}>
        <HeadTitle title={'旅游景点'} navigate={this.props.navigation} />
        <ScrollView
          ref={(view) => {
            this.scroll = view;
          }}>
          <View style={styles.marginLR}>
            <Image
              style={[styles.imgBox, styles.marginTB]}
              source={{uri: img}}
            />
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Text style={styles.infoTitle}>龙子湖AAAA级风景区</Text>
                <Text style={styles.infoFont} numberOfLines={1}>
                  全天候开放 | 票价 0 | 0552-3183542
                </Text>
                <Text
                  style={styles.infoFont}
                  ellipsizeMode={'middle'}
                  numberOfLines={1}>
                  蚌埠市蚌山区龙子湖风景区蚌埠市蚌山区龙子湖风景区蚌埠市蚌山区龙子湖风景区
                </Text>
              </View>
              <View style={styles.location}>
                <Image source={require('../assets/images/location.png')} />
              </View>
            </View>
            <View style={[styles.marginTB, styles.border]} />
            <View>
              <Text
                style={[
                  styles.infoTitle,
                  {marginBottom: container.screenWidth * 0.04},
                ]}>
                景点介绍
              </Text>
              <Text style={styles.intro}>
                龙子湖风景区青山碧水相连，湖岸曲折多变，水面纵深开阔，绝壁怪岩裸露，既有风景怡人的自然风光，又有韵味无穷的人文景观
              </Text>
            </View>
            <View style={{marginBottom: container.screenWidth * 0.04}}>
              <Text style={[styles.infoTitle, styles.marginTB]}>景点详情</Text>
              <Text style={styles.intro}>
                龙子湖风景区青山碧水相连，湖岸曲折多变，水面纵深开阔，绝壁怪岩裸露，既有风景怡人的自然风光，又有韵味无穷的人文景观龙子湖风景区青山碧水相连，湖岸曲折多变，水面纵深开阔，绝壁怪岩裸露，既有风景怡人的自然风光，又有韵味无穷的人文景观
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollTop: {
    width: container.screenWidth * 0.04,
    height: container.screenWidth * 0.04,
    // borderWidth: 10,
    // borderRadius: 75,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  margin: {
    margin: container.screenWidth * 0.04,
  },
  marginLR: {
    marginLeft: container.screenWidth * 0.04,
    marginRight: container.screenWidth * 0.04,
  },
  marginTB: {
    marginTop: container.screenWidth * 0.04,
    marginBottom: container.screenWidth * 0.04,
  },
  border: {
    width: container.screenWidth * 0.08,
    borderWidth: 3,
    borderColor: '#444444',
  },
  imgBox: {
    width: container.screenWidth * 0.92,
    height: container.screenWidth * 0.52,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    flex: 0.8,
    height: container.screenHeight * 0.12,
  },
  location: {
    flex: 0.2,
    height: container.screenHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 24,
    color: '#444444',
  },
  infoFont: {
    fontSize: 16,
    color: '#aaaaaa',
    lineHeight: 24,
  },
  intro: {
    color: '#aaaaaa',
    fontSize: 20,
  },
});

export default ScenicPage;
