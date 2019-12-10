import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

export default function Item(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.text} >{props.data.name}</Text>
      <Text style={styles.text} >{props.data.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
    padding: 10
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  }
})