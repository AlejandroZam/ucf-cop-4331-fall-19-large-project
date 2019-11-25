import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

export default function MapScreen() {
  return (
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
      showsMyLocationButton={true} //??
      onPress={e => console.log(e.nativeEvent)}
      onPoiClick={e => console.log(e.nativeEvent)}
      />
  );
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
});
