import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { PickerIOSComponent, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { newBoard, selectCard } from "../actions";
import { BlurView } from "expo-blur";

const Board = ({ board, newBoard, selectCard, currentId, found, gameWon }) => {
  useEffect(() => {
    newBoard();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {gameWon && (
          <BlurView intensity={100} style={styles.winnerView}>
            <Text style={styles.winnerText}>Tu as gagné! Youpi!</Text>
            <button onClick={() => newBoard()}>Nouvelle partie</button>
          </BlurView>
        )}
        {board.map((c, i) => {
          return (
            <View
              onClick={() => selectCard({ content: c, id: i })}
              key={i}
              style={[
                styles.card,
                currentId.includes(i) && styles.cardSelected,
              ]}
            >
              <Text style={styles.emoji}>
                {found.includes(i) || currentId.includes(i) ? c : "☻"}
              </Text>
            </View>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
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
    borderColor: "grey",
    width: "25%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 50,
  },
  cardSelected: {
    backgroundColor: "pink",
  },
  winnerText: {
    fontSize: 32,
    fontWeight: 700,
  },
  winnerView: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "99",
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
