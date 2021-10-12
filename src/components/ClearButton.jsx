import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ClearButton = () => {
  return (
    <View style = {styles.container}>  
      <Text style={styles.clear}>
        CLEAR ALL DONE
      </Text>
    </View>
  ) 
}
export const styles = StyleSheet.create({
  clear:{
    color: "#FF197B",
    fontWeight: "bold",
    alignSelf: "center",
    
},
  container:{
    backgroundColor: "white"
  }, 
});
