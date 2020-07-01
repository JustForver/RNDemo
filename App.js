/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Enter from './src/index';
import Detail from './src/page/detail';
import Scenic from './src/page/ScenicPage';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Enter} />
    </Drawer.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={DrawerScreen} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Scenic" component={Scenic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
