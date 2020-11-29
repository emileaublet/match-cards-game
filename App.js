import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import generateBoard from "./utils/generateBoard";

export default function App() {
  const [board, setBoard] = useState([]);
  const [play, setPlay] = useState({
    currentPlay: null,
    currentValue: null,
  });

  const handleChooseCard = (e, i) => {
    if (play.currentPlay) {
      if (play.currentValue === e) {
        console.log("tu l'as eu!");
      } else {
        console.log("tu l'as pas eu!");
      }
    } else {
      setPlay({ currentPlay: i, currentValue: e });
    }
  };

  useEffect(() => {
    const b = generateBoard(16);
    setBoard(b);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {board.map((c, i) => (
          <View
            onClick={() => handleChooseCard(c, i)}
            key={i}
            style={styles.card}
          >
            <Text style={styles.emoji}>{play.currentPlay === i ? "P" : c}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 50,
  },
});
