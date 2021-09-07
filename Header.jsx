import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const Headers = () => (
  <View style={styles.container}>
    <Text style={styles.left}>Cancel</Text>
    <Text style={styles.main}> New task </Text>
    <Text style={styles.right}>Save</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 30,
    backgroundColor: "rgb(31, 134, 255)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  left: {
    display: "flex",
    textAlign: "left",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "normal",
  },
  main: {
    display: "flex",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "normal",
  },
  right: {
    display: "flex",
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "normal",
  },
});