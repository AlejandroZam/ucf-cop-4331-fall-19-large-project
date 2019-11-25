import React from 'react';
import { View, StyleSheet } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from "react-native-dynamic-search-bar"

export default function BrowseScreen() {
  
  const [ query, setQuery ] = React.useState("") 

  return (
    <View>
      <View>
        <SearchBar
          placeholder=""
          onChangeText={newQuery => setQuery(newQuery)}
          iconColor="#ffc904"
          shadowColor="#293133"
          fontColor="#293133"
          cancelIconColor="#293133"
          onPressToFocus={true}
        />
      </View>
      <ScrollView>

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchbar: {
    height: 50, 
    borderColor: 'gray',
    borderWidth: 6, 
    borderRadius: 0,
    paddingLeft: 5
  },
})
