import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import { Audio } from "expo-av";
import * as SecureStore from "expo-secure-store";
const Alaram = (props) => {
  const [sound, setSound] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [countValue, setCountValue] = useState(props.presentCount);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  useEffect(() => {
    // Load the switch state from SecureStore when the component mounts
    async function loadValues() {
      try {
        const value = await SecureStore.getItemAsync("audioEnabled");
        console.log("audioEnabled", value);
        if (value !== null) {
          setAudioEnabled(value === "true"); // Convert the stored string to a boolean
        }
      } catch (error) {
        setAudioEnabled(false);
      }
      try {
        const value = await SecureStore.getItemAsync("inputValue");

        if (value != null) {
          setInputValue(value); // Convert the stored string to a boolean
        }
      } catch (error) {
        setInputValue("");
      }
    }

    loadValues();
  }, []);
  handleInputChange = (value) => {
    if (value > 0 && value <= 9999) {
      setInputValue(value);
      save("inputValue", value);
      return value;
    } else {
      value = "";
      setInputValue(value);
      save("inputValue", value);
      return value;
    }
  };

  async function handleSwitch(value) {
    setAudioEnabled(value);

    if (value) {
      save("audioEnabled", String(value));
    } else {
      setAudioEnabled(false);
      setSound(null);
      save("audioEnabled", String(value));
    }
  }
  const updateBigScreen = (x) => {
    props.resetScreen(x);
  };
  const updateAncount = (y) => {
    props.setAncount(y);
  };
  useEffect(() => {
    async function checkValues() {
      setCountValue(props.presentCount);
      if (audioEnabled) {
        if (inputValue == countValue + 1) {
          updateAncount(countValue + 1);
          setTimeout(() => {
            updateBigScreen(0);
            updateAncount(0);
            // Stop the interval
          }, 1500);
          // Stop the interval
          const { sound } = await Audio.Sound.createAsync(
            require("../assets/alaram.mp3")
          );

          setSound(sound);
          await sound.playAsync();
        }
      }
    }
    checkValues();
  }, [props.presentCount]);
  return (
    <View style={styles.alamSty}>
      <Text style={styles.label}>Reset with Alarm</Text>
      <View style={styles.inAndSwitch}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="0"
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <Switch
          style={styles.switchDrag}
          value={audioEnabled}
          onValueChange={handleSwitch}
          thumbColor={audioEnabled ? "#66d68d" : "#ccc"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alamSty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    top: 10,
    color: "white",
    width: 150,
    height: 20,
  },
  inAndSwitch: { flex: 1, flexDirection: "row", top: 2 },
  input: {
    flex: 1,
    top: 30,
    width: 20,
    height: 30,
    left: 20,
    backgroundColor: "white",
    color: "black",
  },
  switchDrag: {
    flex: 1,
  },
});

export default Alaram;
