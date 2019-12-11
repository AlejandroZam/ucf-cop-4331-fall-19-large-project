import React from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Item from './Item';

export default function RestaurantModal(props) {

  return (
    <Modal animationType="slide" visible={props.visible} transparent>
      <View style={styles.wrapper}>
        <View style={styles.contents}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{props.data.name}</Text>
          </View>
          <ScrollView>
            {renderFood(props.data.menu)}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={props.toggleVisible}>
            <Text>Return</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const renderFood = food => {
  return (food.map((item, key) => {
    return (
      <Item key={key} data={item}/>
    )
  }))
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#707484CC",
    paddingHorizontal: 20,
    paddingTop: 30
  },
  closeButton: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc904",
    borderRadius: 30,
    width: "30%",
    height: 40,
    marginBottom: 15,
    marginTop: 15,
    shadowColor: '#707484',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: .6,
  },
  contents: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //paddingBottom: 20
  },
  nameContainer: {
    backgroundColor: "#ffc904",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  name: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  }
})