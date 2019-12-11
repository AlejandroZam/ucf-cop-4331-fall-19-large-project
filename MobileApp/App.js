import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [restaurants, setRestaurants] = useState([])
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    fetch('http://192.168.0.22:5000/api/data/restaurant')
    .then(res1 => res1.json())
    .then(restaurants => setRestaurants(restaurants))
    fetch('http://192.168.0.22:5000/api/data/allMenus')
    .then(res2 => res2.json())
    .then(menuItems => setMenuItems(menuItems))
  }, [])

  const master = []
  restaurants.forEach(restaurant => {
    let restaurantObject = {
      id: restaurant._id,
      name: restaurant.name,
      style: restaurant.style,
      address: restaurant.address,
      coordinates: {
        lat: restaurant.lat,
        long: restaurant.long
      },
      menu: []
    }
    menuItems.forEach(item => {
      if (restaurant._id == item.id) {
        restaurantObject.menu.push({
          name: item.name,
          price: item.price,
          description: item.description
        })
        // remove items as you go here
      }
    })
    restaurantObject['numItems'] = restaurantObject.menu.length
    master.push(restaurantObject)
  })

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator screenProps={master}/>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
