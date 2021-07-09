import { StatusBar } from "expo-status-bar";
import React from "react";
import { ProgressViewIOSComponent, StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      {/* TODO (part 1): update these props with your favorite food item */}
      <MenuItem name="Pesto" price= "13.50" imageSource={require("./assets/pesto4.jpg")} />
      {/* TODO (part 2): add another MenuItem! */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
});
