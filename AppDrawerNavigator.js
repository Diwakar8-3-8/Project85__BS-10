import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomsSidebarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    MyBarters: {
      screen: MyBartersScreen,
    },
    Notifications: {
      screen: NotificationScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
