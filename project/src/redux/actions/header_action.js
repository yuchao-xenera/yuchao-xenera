import { CHANGE_ITEMS } from '../common';

export function changeItems(value) {
  return {
    type: CHANGE_ITEMS,
    data: value
  }
}