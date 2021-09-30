import {CHANGE_ITEMS} from '../comment'

export function changeItems(value){
    return {type:CHANGE_ITEMS,data:value}
}