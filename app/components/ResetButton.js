import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ResetButton = (props) => {
  const handlerest = () => {
    const t = 0;
    props.resetFun(t);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlerest}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff66c4", // '#7cc644',
    borderRadius: 50, // Half of the button's height
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
export default ResetButton;
