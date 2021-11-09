import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export const CheckBox = ({ title, subtitle }) => {
  const [checked, onChange] = React.useState();

  function onCheckmarkPress() {
    onChange(prevState => !prevState);
  }

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.textsContainer}>
          <Text style={styles.principaltext}>{title}</Text>
          <Text style={styles.secondarytext}>{subtitle}</Text>
        </View>
        <Pressable style={{ padding: 15 }} onPress={onCheckmarkPress}>
          <View
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          >
            {checked && <Ionicons name="checkmark" size={20} color="white" />}
          </View>
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
    color: colors.SECONDARY,
    paddingTop: 4,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.SECONDARY,
  },
  checkboxChecked: {
    backgroundColor: "#FF197B",
    justifyContent: "center",
    alignItems: "center",
  },
});
