import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import ResetButton from "./ResetButton";
import RoundedButton from "./RoundedButton";
import Screen from "./Screen";
import Alaram from "./Alaram";
import * as SecureStore from "expo-secure-store";

const Mycomponents = () => {
  const [count, setCount] = useState(0);
  const [ancount, setAncount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonText, setButtonText] = useState("D");
  const [theme, setTheme] = useState("black");
  // Function to save data to SecureStore
  async function saveToSecureStore(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  useEffect(() => {
    // Load the switch state from SecureStore when the component mounts
    async function loadScreenCount() {
      try {
        const value = await SecureStore.getItemAsync("count");

        if (value) {
          val = parseInt(value, 10);
          setCount(val);
        }
      } catch (error) {
        setCount(0);
      }
      try {
        const value = await SecureStore.getItemAsync("theme");

        if (value) {
          setTheme(value);
        }
      } catch (error) {
        setTheme("black");
      }
      try {
        const value = await SecureStore.getItemAsync("buttonText");

        if (value) {
          setButtonText(value);
        }
      } catch (error) {
        setButtonText("W");
      }
    }

    loadScreenCount();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
  const handleTheme = () => {
    if (theme == "black") {
      setTheme("white");
      setButtonText("D");
    } else {
      setTheme("black");
      setButtonText("W");
    }
  };
  const increaseValue = () => {
    if (ancount) {
      setCount(ancount);
      saveToSecureStore("count", String(ancount));
    } else if (count < 9999) {
      setCount(count + 1);
      saveToSecureStore("count", String(count + 1));
    } else {
      resetToValue(0);
      saveToSecureStore("count", String(0));
    }
  };

  const resetToValue = (tempx) => {
    setCount(tempx);
  };

  const ancountUpdate = (tem) => {
    setAncount(tem);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme }]}>
      <View style={styles.viewScreen}>
        <Screen countValue={count} />
      </View>
      <View style={styles.iconImage}>
        <Image
          style={styles.imagelogo}
          source={require("../assets/app-icon.png")}
        />
      </View>
      <View style={styles.ThemeButtonView}>
        <TouchableOpacity
          style={styles.ThemeButton}
          onPress={() => handleTheme()}
        >
          <Text style={styles.ThemeText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewReset}>
        <View style={styles.autoReset}>
          <Alaram
            presentCount={count}
            resetScreen={resetToValue}
            setAncount={ancountUpdate}
          />
        </View>
        <View style={styles.buttonReset}>
          <ResetButton text="Reset" resetFun={resetToValue} />
        </View>
      </View>
      <View style={styles.viewPress}>
        <RoundedButton text="Press + " increaseFun={increaseValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    //  backgroundColor:{theme}
  },
  iconImage: {
    height: 80,
    width: 80,
    top: 22,
    borderRadius: 40,
    position: "absolute",
    overflow: "hidden",
    left: 10,
  },
  imagelogo: {
    flex: 1,
    height: null,
    width: null,

    borderRadius: 40,
  },
  ThemeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  ThemeButtonView: {
    height: 50,
    width: 50,
    top: 30,
    borderRadius: 25,
    position: "absolute",
    right: 15,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  ThemeText: {
    color: "white",
  },
  viewScreen: {
    flex: 1,
    alignItems: "flex-start",
    top: 95,
    position: "absolute",
  },
  viewReset: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 300,
    left: 30,
  },
  autoReset: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#e0b15e", //'#ff66c4',
    alignItems: "center",
    justifyContent: "center",
    bottom: 24,
    right: 20,
  },
  buttonReset: {
    flex: 1,
    right: 4,
    bottom: 24,
    left: 20,
  },
  viewPress: {
    alignItems: "flex-end",
    top: 430,
    position: "absolute",
  },
});
export default Mycomponents;
