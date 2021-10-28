import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const FirstHeader = () => (
  <View style={styles.container}>
    <Button title="Todo" color="#ffffff" />
    <Button title="+" color="#ffffff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
