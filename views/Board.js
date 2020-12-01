import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Button,
} from "react-native";
import { connect } from "react-redux";
import { newBoard, selectCard } from "../actions";
import { BlurView } from "expo-blur";

const img = require("../assets/favicon.png");

const Board = ({ board, newBoard, selectCard, currentId, found, gameWon }) => {
  //   useEffect(() => {
  //     newBoard();
  //   }, []);

  console.log(board);
  const startGame = (
    <BlurView intensity={100} style={styles.winnerView}>
      <Text style={styles.winnerText}>Choisis un jeu</Text>
      <View style={styles.chooseDeck}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => newBoard({ grid: 24, type: "emoji" })}
        >
          <Image
            style={styles.cardBack}
            source={require("../assets/card_emoji.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          activeOpacity={0.6}
          onPress={() => newBoard({ grid: 24, type: "pokemon" })}
        >
          <Image
            style={styles.cardBack}
            source={require("../assets/card_pokemon.png")}
          />
        </TouchableHighlight>
      </View>
      {/* <Button
        title="Jouer encore"
        onPress={() => newBoard({ grid: 4, type: "emojis" })}
      /> */}
    </BlurView>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.grid}>
        {
          gameWon && startGame
          // gameWon && (
          //   <BlurView intensity={100} style={styles.winnerView}>
          //     <Text style={styles.winnerText}>Tu as gagné! Youpi!</Text>
          //     {/* <button onClick={() => newBoard()}>Nouvelle partie</button> */}
          //     <Button title="Jouer encore" onPress={() => newBoard()} />
          //   </BlurView>
          // )
        }
        {board.cards.length === 0
          ? startGame
          : board.cards.map((c, i) => {
              return (
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  key={i}
                  style={styles.card}
                  onPress={() => selectCard({ content: c, id: i })}
                >
                  <View style={[currentId.includes(i) && styles.cardSelected]}>
                    {found.includes(i) || currentId.includes(i) ? (
                      board.type === "text" ? (
                        <Text style={styles.emoji}>{c}</Text>
                      ) : (
                        <Image
                          style={{
                            width: 80,
                            height: 120,
                            resizeMode: "contain",
                          }}
                          source={c}
                        />
                      )
                    ) : (
                      //   (board.type === "text" && (
                      //     <Text style={styles.emoji}>{c} 99</Text>
                      //   ),
                      //   board.type === "image" && (
                      //     <Image style={{ width: 80, height: 120 }} source={c} />
                      //   ))
                      <Image
                        style={{ width: 80, height: 120 }}
                        source={board.back}
                      />
                    )}
                    {/* {/* 
                      {found.includes(i) || currentId.includes(i) ? (
                        c
                      ) : (
                       
                      )}
                    </Text> */}
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
    maxHeight: 100 / 6 + "%",
    minHeight: 100 / 6 + "%",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 50,
  },
  chooseDeck: {
    flexDirection: "row",
  },
  cardSelected: {
    height: 120,
    width: 80,
    backgroundColor: "#eee",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  winnerText: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
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
  cardBack: {
    width: 80,
    height: 120,
  },
});

const mapStateToProps = (state) => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    newBoard: (payload) => dispatch(newBoard(payload)),
    selectCard: (payload) => dispatch(selectCard(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
