import { CHANGE_LEFT_KEY } from '../const'
/**
 * 重置Left Key 的 Action
 * @param {*} data 
 * @returns 
 */
export function resetLeftKeyAction(data) {
    return {
        type: CHANGE_LEFT_KEY,
        data: data
    }
}