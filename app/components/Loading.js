import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagelogo}
        source={require("../assets/app-icon.png")}
      />
      <Text style={styles.text1}>~App by Abdul Rub</Text>
      <Text style={styles.text2}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text2: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  text1: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "yellow",
  },
  imagelogo: {
    width: 200,
    height: 200,
  },
});

export default Loading;
