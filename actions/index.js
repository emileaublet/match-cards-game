import { NEW_BOARD, SELECT_CARD } from "../constants/action-types";

export function newBoard() {
  return { type: NEW_BOARD };
}

export function selectCard(payload) {
  return { type: SELECT_CARD, payload: payload };
}
