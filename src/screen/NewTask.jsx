import React from "react";
import { InputUser } from "../components/InputUser";
import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { colors } from "../constants/colors";

export const NewTask = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <InputUser />
  </SafeAreaView>
);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
  },
});
