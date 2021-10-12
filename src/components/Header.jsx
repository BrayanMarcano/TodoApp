import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Header = () => (
  <View style={styles.container}>
    <Text style={styles.left}>Cancel</Text>
    <Text style={styles.main}>New task</Text>
    <Text style={styles.right}>Save</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 30,
    backgroundColor: "#1F86FF",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  left: {
    color: "#ffffff",
    fontSize: 20,
    paddingLeft: 15,
  },
  main: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  right: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    paddingRight: 15,
  },
});

