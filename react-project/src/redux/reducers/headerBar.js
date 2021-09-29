import { CHANGEKEY } from '../const'

/**
 * reducer
 * @param {*} pre 上一个State数据，如果是初始化，默认设置为0
 * @param {*} action Action对象
 * @returns 
 */
export default function headerBarReducer(pre = "1", action) {
    console.log('headerBar reducer执行了~');

    const { type, data } = action

    switch (type) {
        case CHANGEKEY:
            return data

        default:
            return pre
    }
}