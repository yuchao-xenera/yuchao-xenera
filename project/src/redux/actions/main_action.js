import { SEND_URL_PATH } from '../common';

export function sendPath(value){
  return {
    type: SEND_URL_PATH,
    data: value
  }
}