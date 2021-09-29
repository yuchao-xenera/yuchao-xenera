import {PASS_HERADER} from '../common'

export function header(value){
    return{
        type:PASS_HERADER,
        data:value
    }
}