import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RestaurantModal from './RestaurantModal'
import Icon from 'react-native-ionicons';

export default function Restaurant(props) {

  const [ isModalVisible, toggle ] = React.useState(false)

  const toggleModal = () => {
    toggle(!isModalVisible)
  }

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={toggleModal}>
        <View style={styles.icon}></View>
        <View style={styles.factSheet}>
          <Basics data={props.restaurant} />
        </View>
      </TouchableOpacity>
      <RestaurantModal visible={isModalVisible} toggleVisible={toggleModal} data={props.restaurant}/>
    </>
  )
}

const Basics = props => {

  return (
    <View style={styles.basics}>
      <Text style={styles.mainText}>
        {props.data.name}
      </Text>
      <Text style={styles.subText}>
        Items Available: {props.data.numItems}
      </Text>
    </View>
  )
}

const Distance = props => {

  return (
    <View style={styles.distance}>
      <Text>
        {props.data.miles} miles
      </Text>
      <Text>
        {props.data.driveLength} minutes
      </Text>
      <Text>
        {props.data.walkLength} minutes
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    backgroundColor: "#ffc904",
    borderRadius: 60,
    width: "90%",
    height: 80,
    marginBottom: 20,
    shadowColor: '#707484',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .6,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff"
  },
  factSheet: {
    flex: 1,
    marginLeft: 10,
    marginRight: 40,
  },
  basics: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  subText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  name: {
    alignSelf: "center"
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})