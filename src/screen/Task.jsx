import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { FirstHeader } from "../components/FirstHeader";
import { CheckBox, CheckBoxs } from "../components/CheckBoxs";
import { ClearButton } from "../components/ClearButton";
import { colors, PRIMARY } from "../constants/colors";

const DATA = [
  {
    id: 'pruebaid-123',
    title: "Hacer el almuerzo",
    subtitle: 'Empanadas de pollo'
  },
  {
    id: 'pruebaid-12345',
    title: "Hacer el checkbox",
    subtitle: 'Incluirle titulo y subtitulos'
  },
  {
    id: 'pruebaid-123456',
    title: "Hacer la primera pantalla dinamica",
    subtitle: 'No hardcodear'
  },
  {
    id: 'pruebaid-1234567',
    title: "Hacer la segunda pantalla",
    subtitle: 'Boton de añadir'
  },
]

export const Task = () => {
  const renderItem = ({item}) => (
    <CheckBox title ={item.title} subtitle ={item.subtitle} />

  );
  return(
    <SafeAreaView style = {styles.container}>
      <FirstHeader />
      <FlatList 
      data = {DATA}
      renderItem = {renderItem}
      keyExtractor = {item => item.id}
      />
      <ClearButton />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
  },
});
