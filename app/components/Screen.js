import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Screen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.displaytext}>{props.countValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    width: 250,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    color: "gold",
    borderRadius: 40,
  },
  displaytext: {
    color: "white",
    fontSize: 80,
  },
});
export default Screen;
