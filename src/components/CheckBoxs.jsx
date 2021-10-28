import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CheckBox = ({ title, subtitle }) => {
  const [checked, onChange] = React.useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.textsContainer}>
          <Text style={styles.principaltext}>{title}</Text>
          <Text style={styles.secondarytext}>{subtitle}</Text>
        </View>
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={onCheckmarkPress}
        >
          {checked && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flexDirection: "column",
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 19,
  },
  textsContainer: {
    flexDirection: "column",
    padding: 16,
  },
  principaltext: {
    fontSize: 16,
  },
  secondarytext: {
    color: "#959595",
    paddingTop: 4,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#959595",
  },
  checkboxChecked: {
    backgroundColor: "#FF197B",
    justifyContent: "center",
    alignItems: "center",
  },
});
