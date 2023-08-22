import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Loading from "./app/components/Loading";
import MyComponents from "./app/components/MyComponents";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the task is done.
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Loading /> : <MyComponents />}
    </View>
  );
};

export default App;
