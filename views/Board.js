import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
} from "react-native";
import { connect } from "react-redux";
import { newBoard, selectCard } from "../actions";
import { BlurView } from "expo-blur";

const Board = ({ board, newBoard, selectCard, currentId, found, gameWon }) => {
  useEffect(() => {
    newBoard();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.grid}>
        {gameWon && (
          <BlurView intensity={100} style={styles.winnerView}>
            <Text style={styles.winnerText}>Tu as gagné! Youpi!</Text>
            {/* <button onClick={() => newBoard()}>Nouvelle partie</button> */}
            <Button title="Jouer encore" onPress={() => newBoard()} />
          </BlurView>
        )}
        {board.map((c, i) => {
          return (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              key={i}
              style={styles.card}
              onPress={() => selectCard({ content: c, id: i })}
            >
              <View style={[currentId.includes(i) && styles.cardSelected]}>
                <Text style={styles.emoji}>
                  {found.includes(i) || currentId.includes(i) ? c : "🃏"}
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    width: "25%",
    height: 100 / 6 + "%",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 50,
  },
  cardSelected: {
    height: "100%",
    width: "100%",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  winnerText: {
    fontSize: 32,
    fontWeight: "700",
  },
  winnerView: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 99,
    backgroundColor: "rgba(256, 256, 256, .5)",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    newBoard: () => dispatch(newBoard()),
    selectCard: (payload) => dispatch(selectCard(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
