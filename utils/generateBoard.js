const emojis = {
  type: "text",
  back: require("../assets/card_emoji.png"),
  cards: [
    "🐵",
    "🦍",
    "🦧",
    "🐶",
    "🐕",
    "🐩",
    "🐺",
    "🦊",
    "🦝",
    "🐱",
    "🐈",
    "🐈‍⬛",
    "🦁",
    "🐯",
    "🐅",
    "🐆",
    "🐴",
    "🦄",
    "🦓",
    "🦌",
    "🦬",
    "🐮",
    "🐂",
    "🐃",
    "🐄",
    "🐷",
    "🐖",
    "🐗",
    "🐏",
    "🐑",
    "🐐",
    "🐪",
    "🐫",
    "🦙",
    "🦒",
    "🐘",
    "🦣",
    "🦏",
    "🦛",
    "🐭",
    "🐁",
    "🐹",
    "🐰",
    "🐇",
    "🐿️",
    "🦫",
    "🦔",
    "🐻",
    "🐻‍❄️",
    "🐨",
    "🐼",
    "🦥",
    "🦦",
    "🦨",
    "🦘",
    "🦡",
    "🦃",
    "🐔",
    "🐤",
    "🐥",
    "🐦",
    "🐧",
    "🦆",
    "🦢",
    "🦉",
    "🦤",
    "🦩",
    "🦚",
    "🦜",
    "🐸",
    "🐢",
    "🐍",
    "🦕",
    "🦖",
    "🐳",
    "🐋",
    "🐬",
    "🦭",
    "🐟",
    "🐠",
    "🐡",
    "🦈",
    "🐙",
    "🐌",
    "🦋",
    "🪲",
    "🐞",
    "🕷️",
    "🦀",
    "🦞",
  ],
};

const pokemon = {
  type: "image",
  back: require("../assets/card_pokemon.png"),
  cards: [
    require("../assets/pokemon/1.png"),
    require("../assets/pokemon/2.png"),
    require("../assets/pokemon/3.png"),
    require("../assets/pokemon/4.png"),
    require("../assets/pokemon/5.png"),
    require("../assets/pokemon/6.png"),
    require("../assets/pokemon/7.png"),
    require("../assets/pokemon/8.png"),
    require("../assets/pokemon/9.png"),
    require("../assets/pokemon/10.png"),
    require("../assets/pokemon/11.png"),
    require("../assets/pokemon/12.png"),
    require("../assets/pokemon/13.png"),
    require("../assets/pokemon/14.png"),
    require("../assets/pokemon/15.png"),
    require("../assets/pokemon/16.png"),
    require("../assets/pokemon/17.png"),
    require("../assets/pokemon/18.png"),
    require("../assets/pokemon/19.png"),
    require("../assets/pokemon/20.png"),
    require("../assets/pokemon/21.png"),
    require("../assets/pokemon/22.png"),
    require("../assets/pokemon/23.png"),
    require("../assets/pokemon/24.png"),
    require("../assets/pokemon/25.png"),
    require("../assets/pokemon/26.png"),
    require("../assets/pokemon/27.png"),
    require("../assets/pokemon/28.png"),
    require("../assets/pokemon/29.png"),
    require("../assets/pokemon/30.png"),
    require("../assets/pokemon/31.png"),
    require("../assets/pokemon/32.png"),
    require("../assets/pokemon/33.png"),
    require("../assets/pokemon/34.png"),
    require("../assets/pokemon/35.png"),
    require("../assets/pokemon/36.png"),
    require("../assets/pokemon/37.png"),
    require("../assets/pokemon/38.png"),
    require("../assets/pokemon/39.png"),
    require("../assets/pokemon/40.png"),
    require("../assets/pokemon/41.png"),
    require("../assets/pokemon/42.png"),
    require("../assets/pokemon/43.png"),
    require("../assets/pokemon/44.png"),
    require("../assets/pokemon/45.png"),
    require("../assets/pokemon/46.png"),
    require("../assets/pokemon/47.png"),
    require("../assets/pokemon/48.png"),
    require("../assets/pokemon/49.png"),
    require("../assets/pokemon/50.png"),
    require("../assets/pokemon/51.png"),
    require("../assets/pokemon/52.png"),
    require("../assets/pokemon/53.png"),
    require("../assets/pokemon/54.png"),
    require("../assets/pokemon/55.png"),
    require("../assets/pokemon/56.png"),
    require("../assets/pokemon/57.png"),
    require("../assets/pokemon/58.png"),
    require("../assets/pokemon/59.png"),
    require("../assets/pokemon/60.png"),
    require("../assets/pokemon/61.png"),
    require("../assets/pokemon/62.png"),
    require("../assets/pokemon/63.png"),
    require("../assets/pokemon/64.png"),
    require("../assets/pokemon/65.png"),
    require("../assets/pokemon/66.png"),
    require("../assets/pokemon/67.png"),
    require("../assets/pokemon/68.png"),
    require("../assets/pokemon/69.png"),
    require("../assets/pokemon/70.png"),
    require("../assets/pokemon/71.png"),
    require("../assets/pokemon/72.png"),
    require("../assets/pokemon/73.png"),
    require("../assets/pokemon/74.png"),
    require("../assets/pokemon/75.png"),
    require("../assets/pokemon/76.png"),
    require("../assets/pokemon/77.png"),
    require("../assets/pokemon/78.png"),
    require("../assets/pokemon/79.png"),
    require("../assets/pokemon/80.png"),
    require("../assets/pokemon/150.png"),
  ],
};

const generateBoard = (tiles, type) => {
  let deck;
  switch (type) {
    case "pokemon":
      deck = pokemon;
      break;

    default:
      deck = emojis;
      break;
  }
  let n = tiles % 2 == 0 ? tiles / 2 : (tiles + 1) / 2;
  var result = new Array(n),
    len = deck.cards.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = deck.cards[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return {
    cards: [...result, ...result].sort(() => Math.random() - 0.5),
    type: deck.type,
    back: deck.back,
  };
};

export default generateBoard;
