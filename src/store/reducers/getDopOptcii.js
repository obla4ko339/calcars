import {FETCH_GET_DOP_OPTCII} from '../action'



export default function getDopOptcii(state=null, action){
    switch(action.type){
        case FETCH_GET_DOP_OPTCII:
            return {
                ...state, ...{dopOptcii:{...action.data}}
            }
        default:
            return state
    } 
}