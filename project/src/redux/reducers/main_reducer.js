import { SEND_URL_PATH } from '../common';

export function sendPathReducer(preState = '', action) {
  switch (action.type) {
    case SEND_URL_PATH:
      return action.data;
    default:
      return preState;
  }
}