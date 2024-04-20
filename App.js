import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, Button, View, Pressable } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <View style={styles.button1}>
        <Pressable
          android_ripple={{ color: "#0C317830" }}
          onPress={() => setCounter(counter + 1)}
        >
          <Text style={styles.text}>Next</Text>
        </Pressable>
      </View>
      <View style={styles.button2}>
        <Pressable
          android_ripple={{ color: "#1042A2" }}
          onPress={() => setCounter(counter - 1)}
        >
          <Text style={[styles.text, { color: "white" }]}>Finish</Text>
        </Pressable>
      </View>
      <Button
        color={"black"}
        title="Reset"
        onPress={() => {
          setCounter(0);
          console.log("reset");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "#0C3178",
    borderWidth: 2,
    elevation: 3,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#0C3178",
    overflow: "hidden",
  },
  text: {
    paddingVertical: 8 * 2,
    paddingHorizontal: 40,
    fontSize: 20,
    color: "white",
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#0C3178",
  },
});
