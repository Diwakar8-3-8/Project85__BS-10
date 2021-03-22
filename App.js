import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignLog from './screens/SignUpLogInScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import HomeScreen from './screens/HomeScreen';
import MyBartersScreen from './screens/MyBartersScreen';

export default function App() {
  return <MyBartersScreen />;
}

const switchNavigator = createSwitchNavigator({
  SignLog: { screen: SignLog },
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
