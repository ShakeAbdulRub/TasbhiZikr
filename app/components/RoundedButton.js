import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const RoundedButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.increaseFun}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7cc644", //'#e0b15e',
    borderRadius: 150, // Half of the button's height
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
export default RoundedButton;
