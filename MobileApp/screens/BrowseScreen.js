import React from 'react';
import { View, StyleSheet } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from "react-native-dynamic-search-bar"
import  Restaurant  from "../components/Restaurant"
import RestaurantModal from '../components/RestaurantModal';

export default function BrowseScreen(props) {
  
  const [ query, setQuery ] = React.useState("") 

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder=""
          onChangeText={newQuery => setQuery(newQuery)}
          iconColor="#ffc904"
          shadowColor="#293133"
          fontColor="#293133"
          cancelIconColor="#293133"
          onPressToFocus={true}
          onPress={() => {
            
          }}
          onPressCancel={() => setQuery("")}
        />
      </View>
      <ScrollView style={styles.listContainer}>
        {renderRestaurants(props.screenProps, query)}
      </ScrollView>
    </View>
  );
}

BrowseScreen.navigationOptions = {
  title: 'UCF Dollar Menu',
  headerStyle: {
    backgroundColor: "#ffc904"
  }
};

const renderRestaurants = (data, filter) => {
  return (data.map((restaurant, key) => {
    return (
      isValidRestaurant(restaurant, filter) ? 
      <Restaurant key={key} restaurant={restaurant}/> :
      null
    )
  }))
}

const isValidRestaurant = (data, filter) => {
  let isValid = false
  filter = filter.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  let name = data.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  if (name.includes(filter)) return true
  let style = data.style.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  if (style.includes(filter)) return true
  data.menu.forEach(foodItem => {
    let name = foodItem.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    if (name.includes(filter)) isValid = true
  })
  return isValid
}

const restaurants = [
  {
    basics: {
      name: "McDonalds",
      style: "American",
      numItems: "15",
    }, 
    location: { 
      lat: 28.599899,
      long: -81.208149
    },
    distance: {
      miles: "1.6",
      driveLength: "3",
      walkLength: "13",
    },
    food: [
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },

    ]
  },
  {
    basics: {
      name: "Taco Bell",
      style: "Tex-Mex",
      numItems: "30",
    }, 
    location: {
      lat: 28.599899,
      long: -81.208149
    },
    distance: {
      miles: "1.8",
      driveLength: "4",
      walkLength: "12",
    },
    food: [
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
    ]
  },
  {
    basics: {
      name: "Wendys",
      style: "American",
      numItems: "11",
    }, 
    location: {
      lat: 28.598219, 
      long: -81.208787
    }, 
    distance: {
      miles: "2.4",
      driveLength: "8",
      walkLength: "30",
    },
    food: [
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
      { name: "McChicken", price: 1.99 },
    ]
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  searchContainer: {
    marginBottom: 20
  },
  listContainer: {
    
  },
})
