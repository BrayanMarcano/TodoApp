import React from "react";
import { InputUser } from "../components/InputUser";
import { View, SafeAreaView } from "react-native";
import { Header } from "../components/Header";

export const NewTask = () => (
  <SafeAreaView style= {{backgroundColor: ' #1F86FF'}}>
    <Header />
    <InputUser />
  </SafeAreaView>
);
