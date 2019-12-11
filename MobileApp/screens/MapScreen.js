import React from 'react';
import { ScrollView, StyleSheet, View , Dimensions} from 'react-native';
import MapView from 'react-native-maps'
import RestaurantModal from '../components/RestaurantModal';
import SearchBar from 'react-native-dynamic-search-bar'

export default function MapScreen(props) {

  const [ isModalVisible, toggle ] = React.useState(false)
  
  const [ query, setQuery ] = React.useState("") 

  const toggleModal = () => {
    toggle(!isModalVisible)
  }
  
  return (
    <>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
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
      </View>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 28.597887,
          longitude: -81.207956,
          latitudeDelta: .045,
          longitudeDelta: .02
        }}
        mapType="mutedStandard"
        showsUserLocation={true}

        >
          {renderMarkers(props.screenProps, query)}
        </MapView>
      </>
  );
}

const renderMarkers = (data, filter) => {
  return (data.map((restaurant, key) => {
    return (
      isValidRestaurant(restaurant, filter) ?
      <MapView.Marker
        key={key}
        coordinate={{
          latitude: restaurant.coordinates.lat,
          longitude: restaurant.coordinates.long
        }}
        title={restaurant.name}
        description={restaurant.style}
      />
      :
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

MapScreen.navigationOptions = {
  title: 'UCF Dollar Menu',
  headerStyle: {
    backgroundColor: "#ffc904"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  searchContainer: {
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  search: {
    flex: 1,
  }
});
