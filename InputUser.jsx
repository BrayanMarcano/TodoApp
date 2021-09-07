import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export const InputUser = () => {
  const [text, onChangeText] = React.useState();
  const [description, onChangeTextDescription] = React.useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Task title"
      />
      <TextInput
        style={styles.description}
        onChangeText={onChangeTextDescription}
        value={description}
        placeholder="Task description"
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 15,
    borderBottomColor: "rgb(255, 25, 123)",
    borderBottomWidth: 2,
    fontSize: 25,
  },
  container: {
    height: 230,
    backgroundColor: "rgb(248, 248, 248)",
    display: "flex",
  },
  description: {
    height: 15,
    margin: 15,
    fontSize: 15,
  },
});