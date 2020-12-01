import { NEW_BOARD, SELECT_CARD } from "../constants/action-types";

export function newBoard(payload) {
  return { type: NEW_BOARD, payload: payload };
}

export function selectCard(payload) {
  return { type: SELECT_CARD, payload: payload };
}
