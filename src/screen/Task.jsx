import React from "react";
import { SafeAreaView, View } from "react-native";
import { FirstHeader } from "../components/FirstHeader";
import { CheckBox, CheckBoxs } from "../components/CheckBoxs";
import { ClearButton } from "../components/ClearButton";

export const Task = () => (
  <SafeAreaView style= {{backgroundColor: '#1F86FF'}}>
    <FirstHeader />
    <CheckBox />
    <CheckBox />
    <ClearButton />
  </SafeAreaView>

);
