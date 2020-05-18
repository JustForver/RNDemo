import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import container from './utils/container';
import Swiper from 'react-native-swiper';
let AutoResponsive = require('autoresponsive-react-native');
const Mock = require('mockjs');
const Random = Mock.Random;

class Enter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArr: [],
      _dataPart3: [],
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      refreshing: false,
    };
  }
  componentDidMount() {
    this.fetchData();
    this.renderPart3();
  }
  fetchData() {
    const arr = [];
    const colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // 颜色数组
    for (let i = 0, len = colorAry.length; i < len; i++) {
      arr.push(
        <View
          key={i}
          style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}>
          <Text>i</Text>
        </View>,
      );
    }
    this.setState({itemArr: this.state.itemArr.concat(arr)});
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    const newItem = ['pink', 'red'];
    const arr = [];
    for (let i = 0, len = newItem.length; i < len; i++) {
      arr.push(
        <View
          key={newItem[i] + new Date().getTime()}
          style={[styles.itemStyle, {backgroundColor: newItem[i]}]}>
          <Text>i</Text>
        </View>,
      );
    }
    setTimeout(() => {
      this.setState({
        refreshing: false,
        itemArr: arr.concat(this.state.itemArr),
      });
    }, 2000);
    /*fetchData().then(() => {
      this.setState({refreshing: false});
    });*/
  };
  renderItem() {
    return this.state.itemArr;
  }
  _onPressButton() {}
  newsItem() {
    const arr_1 = [];
    for (let i = 0; i < 5; i++) {
      arr_1.push(
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this._onPressButton}
          key={i + new Date().getTime()}>
          <View style={styles.scenicItem}>
            <View style={styles.scenicItemImage}>
              <Image
                style={styles.img}
                source={require('./assets/images/part1_1.png')}
              />
            </View>
            <View style={styles.scenicItemContent}>
              <Text style={styles.scenicItemTitle} numberOfLines={1}>
                蚌埠文化云-文化旅游产品上线啦
              </Text>
              <Text style={styles.scenicItemInfo} numberOfLines={2}>
                蚌埠市文化云系列产品-文化旅行平台与2020年4月15日开始线上运行！导航栏...更多
              </Text>
            </View>
          </View>
        </TouchableOpacity>,
      );
    }
    return arr_1;
  }
  activityItem() {
    const arr_2 = [];
    for (let i = 0; i < 5; i++) {
      arr_2.push(
        <View
          key={new Date().getTime()}
          style={[
            i !== 4 && styles.marginRight,
            {
              width: container.screenWidth * 0.76,
              height: container.screenWidth * 0.43,
            },
          ]}>
          <Image
            style={[
              styles.img,
              {
                marginBottom: container.screenWidth * 0.02,
              },
            ]}
            source={require('./assets/images/part1_1.png')}
          />
          <Text style={styles.scenicItemTitle}>蚌埠家庭拿手菜厨艺大赛</Text>
          <Text style={styles.time}>2020.05.07</Text>
        </View>,
      );
    }
    return arr_2;
  }
  attractionItem() {
    const _dataPart4 = [];
    for (let i = 0; i < 4; i++) {
      const img = Random.image('200x100', '#50B347', '#FFF', 'MOCK.JS');
      const title = Random.cparagraph(1);
      const time = Random.date('yyyy/MM/dd');
      _dataPart4.push(
        <View
          key={new Date().getTime()}
          style={[
            styles.attractionContainer,
            styles.marginLeft,
            styles.marginRight,
            styles.marginTop,
          ]}>
          <Image
            style={[styles.marginBottom, styles.attractionImage]}
            source={{uri: img}}
          />
          <Text styles={styles.titleTop}>{title}</Text>
          <Text style={[styles.marginBottom, styles.time]}>{time}</Text>
        </View>,
      );
    }
    return _dataPart4;
  }
  commodityItem() {
    const _dataPart5 = [];
    for (let i = 0; i < 4; i++) {
      const img = Random.image('200x100', '#50B347', '#FFF', 'MOCK.JS');
      const title = Random.cparagraph(1);
      const content = Random.cparagraph(1);
      const key = Mock.mock('@float');
      _dataPart5.push(
        <View key={key} style={styles.commodity}>
          <Image style={styles.commodityImg} source={{uri: img}} />
          <Text
            style={[{marginTop: container.screenWidth * 0.02}, styles.titleTop]}
            numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.time} numberOfLines={1}>
            {content}
          </Text>
        </View>,
      );
    }
    return _dataPart5;
  }
  renderPart3() {
    for (let i = 0; i < 5; i++) {
      let px1 = Math.random() * 1000 + 1000,
        px2 = Math.random() * 1000 + 1000;
      const img = Random.image(px1 + 'x' + px2, '#50B347', '#FFF', 'MOCK.JS');
      const key = Mock.mock('@float');
      Image.getSize(
        img,
        (width, height) => {
          this.setState({
            _dataPart3: [
              ...this.state._dataPart3,
              <View
                style={this.getChildrenStyle({
                  width,
                  height,
                  isContainer: true,
                })}
                key={key}>
                <View
                  style={this.getChildrenStyle({
                    width,
                    height,
                    isContainer: false,
                  })}>
                  <Image style={styles.img} source={{uri: img}} />
                </View>
                <View
                  style={[
                    styles.marginTop,
                    {height: container.screenWidth * 0.2},
                  ]}>
                  <Text numberOfLines={1} style={styles.titleTop}>
                    张公山公园
                  </Text>
                  <Text numberOfLines={2} style={styles.time}>
                    张公山风景区是国家AAAA景区，位于安徽省蚌埠市西南部
                  </Text>
                </View>
              </View>,
            ],
          });
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }
  getAutoResponsiveProps() {
    return {
      itemMargin: container.screenWidth * 0.04,
    };
  }
  getChildrenStyle(px) {
    let style = {
      width: container.screenWidth * 0.44,
      height: (px.height / px.width) * container.screenWidth * 0.44,
    };
    if (px.isContainer) {
      style.height = style.height + container.screenWidth * 0.2;
      style.margin = container.screenWidth * 0.04;
    }
    return style;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View>
            <ImageBackground
              source={require('./assets/images/head-bd.png')}
              style={{
                width: container.screenWidth,
                height: container.screenHeight * 0.08,
              }}
            />
            <View style={styles.swiperContainer}>
              <Swiper
                horizontal={true}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                dot={
                  <View
                    style={{
                      //未选中的圆点样式
                      backgroundColor: '#cdcdcc',
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  />
                }
                activeDot={
                  <View
                    style={{
                      //选中的圆点样式
                      backgroundColor: '#ffffff',
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  />
                }
                showsButtons={false}>
                <Image
                  source={require('./assets/images/banner1.png')}
                  style={styles.img}
                />
                <Image
                  source={require('./assets/images/banner1.png')}
                  style={styles.img}
                />
                <Image
                  source={require('./assets/images/banner1.png')}
                  style={styles.img}
                />
              </Swiper>
            </View>
          </View>
          <View style={styles.partContainer}>
            <View style={styles.title}>
              <Text style={styles.titleTop}>景区动态</Text>
              <Text style={styles.titleBottom}>NEWS</Text>
            </View>
            {this.newsItem()}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text> 更多 </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*文化活动*/}
          <View style={styles.partContainer}>
            <View style={styles.title}>
              <Text style={styles.titleTop}>文化活动</Text>
              <Text style={styles.titleBottom}>ACTIVITY</Text>
            </View>
            <ScrollView
              horizontal={true}
              // 隐藏滚动条
              showsHorizontalScrollIndicator={false}
              style={{
                flex: 1,
                height: container.screenWidth * 0.6,
                marginTop: container.screenWidth * 0.04,
              }}>
              {this.activityItem()}
            </ScrollView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text> 更多 </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*热门图集*/}
          <View style={styles.partContainer}>
            <View style={styles.title}>
              <Text style={styles.titleTop}>热门图集</Text>
              <Text style={styles.titleBottom}>ATLAS</Text>
            </View>
            <AutoResponsive {...this.getAutoResponsiveProps()}>
              {this.state._dataPart3}
            </AutoResponsive>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text> 更多 </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*热门景点*/}
          <View style={styles.partContainer}>
            <View style={styles.title}>
              <Text style={styles.titleTop}>热门景点</Text>
              <Text style={styles.titleBottom}>ATTRACTIONS</Text>
            </View>
            {this.attractionItem()}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text> 更多 </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*热门商品*/}
          <View style={styles.partContainer}>
            <View style={styles.title}>
              <Text style={styles.titleTop}>热门商品</Text>
              <Text style={styles.titleBottom}>COMMODITY</Text>
            </View>
            <View style={styles.commodityContainer}>
              {this.commodityItem()}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text> 更多 </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*底部地址*/}
          <View
            style={[
              styles.partContainer,
              styles.copyRight,
              styles.marginBottom,
            ]}>
            <Text style={styles.time}>
              Copyright 2019 上海上业信息科技股份有限公司
            </Text>
            <Image source={require('./assets/images/Copyright.png')} />
          </View>
          {/*{this.renderItem()}*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginTop: {
    marginTop: container.screenWidth * 0.04,
  },
  marginBottom: {
    marginBottom: container.screenWidth * 0.04,
  },
  marginRight: {
    marginRight: container.screenWidth * 0.04,
  },
  marginLeft: {
    marginLeft: container.screenWidth * 0.04,
  },
  itemStyle: {
    // 尺寸
    width: 1000,
    height: 200,
  },
  swiperContainer: {
    width: container.screenWidth,
    height: container.screenHeight * 0.3,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  bd: {
    backgroundColor: 'red',
  },
  partContainer: {
    width: container.screenWidth,
    marginTop: container.screenHeight * 0.03,
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  titleTop: {
    color: '#444444',
    fontSize: 20,
  },
  titleBottom: {
    color: '#c1c1c1',
    fontSize: 12,
  },
  scenicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: container.screenWidth * 0.92,
    height: container.screenHeight * 0.14,
    marginLeft: container.screenWidth * 0.04,
    marginRight: container.screenWidth * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderStyle: 'dotted',
  },
  scenicItemImage: {
    flex: 0.26,
    width: container.screenWidth * 0.26,
    height: container.screenWidth * 0.15,
  },
  scenicItemContent: {
    flex: 0.74,
    marginLeft: container.screenWidth * 0.02,
  },
  time: {
    color: '#c1c1c1',
    fontSize: 16,
  },
  titleContainer: {},
  contentContainer: {},
  scenicItemTitle: {
    color: '#444444',
    fontSize: 20,
  },
  scenicItemInfo: {
    color: '#949494',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    marginTop: container.screenHeight * 0.03,
    marginBottom: container.screenHeight * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#949494',
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 15,
    width: container.screenWidth * 0.48,
    height: '100%',
    alignItems: 'center',
  },
  attractionContainer: {
    width: container.screenWidth * 0.92,
  },
  attractionImage: {
    width: '100%',
    height: container.screenWidth * 0.69,
    borderRadius: 10,
  },
  commodityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: container.screenWidth * 0.02,
  },
  commodity: {
    width: container.screenWidth * 0.44,
    margin: container.screenWidth * 0.02,
  },
  commodityImg: {
    width: container.screenWidth * 0.44,
    height: container.screenWidth * 0.56,
  },
  copyRight: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'rgb(58, 45, 91)',
  },
});

export default Enter;
