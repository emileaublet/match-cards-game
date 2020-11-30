import { NEW_BOARD, SELECT_CARD } from "../constants/action-types";
import generateBoard from "../utils/generateBoard";

const initialState = {
  board: [],
  currentId: [],
  currentValue: null,
  found: [],
  gameWon: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === NEW_BOARD) {
    return Object.assign({}, state, {
      board: generateBoard(24),
      currentId: [],
      currentValue: null,
      found: [],
      gameWon: false,
    });
  }
  if (action.type === SELECT_CARD) {
    // Check if card is already selected, or in the found section
    if (
      state.found.includes(action.payload.id) ||
      (state.currentId.length === 1 &&
        state.currentId.includes(action.payload.id))
    ) {
      return state;
    }
    // If a card is already selected, check if there is a match
    if (state.currentId.length === 1) {
      let found = [...state.found];
      let currentId = [...state.currentId, action.payload.id];
      if (state.currentValue === action.payload.content) {
        found.push(action.payload.id, state.currentId[0]);
        currentId = [];
      }
      return Object.assign({}, state, {
        found: found,
        currentId: currentId,
        currentValue: null,
        gameWon: found.length === state.board.length,
      });
    }

    // Otherwise
    return Object.assign({}, state, {
      currentId: [action.payload.id],
      currentValue: action.payload.content,
    });
  }
  return state;
}

export default rootReducer;
