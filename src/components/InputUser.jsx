import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export const InputUser = () => {
  const [principalText, onChangeText] = React.useState();
  const [descriptionInput, onChangeTextDescription] = React.useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputprincipal}
        onChangeText={onChangeText}
        value={principalText}
        placeholder="Task title"
      />
      <TextInput
        style={styles.descriptionInput}
        onChangeText={onChangeTextDescription}
        value={descriptionInput}
        placeholder="Task description"
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  inputprincipal: {
    height: 50,
    margin: 15,
    borderBottomColor: "#FF197B",
    borderBottomWidth: 2,
    fontSize: 25,
  },
  container: {
    height: 230,
    backgroundColor: "#F8F8F8",
  },
  descriptionInput: {
    height: 15,
    margin: 15,
    fontSize: 15,
  },
});
