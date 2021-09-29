import { CHANGEKEY } from '../const'
/**
 * 重置Key 的 Action
 * @param {*} data 
 * @returns 
 */
export function resetHeaderKeyAction(data) {
    return {
        type: CHANGEKEY,
        data: data
    }
}