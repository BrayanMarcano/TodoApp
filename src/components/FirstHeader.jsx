import React from "react";
import { View, Text, StyleSheet } from "react-native";


export const FirstHeader = () => (
  <View style={styles.container}>
      
      <Text style={styles.main}>Todo</Text>
      <Text style={styles.right}>+</Text>

  </View>
  
);


const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 30,
    backgroundColor: "#1F86FF",
    flexDirection: "row", 
    justifyContent: "space-between", 
  },
  main: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
    right: {
    color: "#ffffff",
    fontSize: 20,
    paddingRight: 15,
  },
});