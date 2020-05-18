/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Enter from './src/index';
import Test from './src/page/test';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
// <Enter style={styles.body} />
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Enter">
        <Drawer.Screen name="Enter" component={Enter} />
        <Drawer.Screen name="Notifications" component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
