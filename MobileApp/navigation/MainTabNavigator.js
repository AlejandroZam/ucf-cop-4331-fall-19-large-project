import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BrowseScreen from '../screens/BrowseScreen';
import MapScreen from '../screens/MapScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const BrowseStack = createStackNavigator(
  {
    Browse: BrowseScreen,
  },
  config
);

BrowseStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-information-circle'
      }
    />
  ),
};

BrowseStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-link'} />
  ),
};

MapStack.path = '';

// const FavoritesStack = createStackNavigator(
//   {
//     Favorites: FavoritesScreen,
//   },
//   config
// );

// FavoritesStack.navigationOptions = {
//   tabBarLabel: 'Favorites',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-options'} />
//   ),
// };

//FavoritesStack.path = '';

const tabNavigator = createBottomTabNavigator({
  BrowseStack,
  MapStack,
  //FavoritesStack,
},
{
  initialRouteName: "BrowseStack",
  tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#000000',
    activeBackgroundColor: "#ffc904",
    inactiveBackgroundColor: "#ffc904"
  }
});


tabNavigator.path = '';

export default tabNavigator;
