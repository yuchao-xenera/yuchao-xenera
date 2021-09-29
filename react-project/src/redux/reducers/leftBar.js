import { CHANGE_LEFT_KEY } from "../const";

/**
 * reducer
 * @param {*} pre 上一个State数据，如果是初始化，默认设置为0
 * @param {*} action Action对象
 * @returns 
 */
 export default function leftBarReducer(pre = "1", action) {
    // console.log('leftBar reducer执行了~');

    const { type, data } = action

    switch (type) {
        case CHANGE_LEFT_KEY:
            return data

        default:
            return pre
    }
}