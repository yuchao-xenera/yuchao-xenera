import { CHANGEKEY } from '../const'
/**
 * 重置Key 的 Action
 * @param {*} data 
 * @returns 
 */
export function resetKeyAction(data) {
    return {
        type: CHANGEKEY,
        data: data
    }
}