import {FETCH_SUCCESS_GET_STVORKI} from '../action'

export default function getStvorki(state=null, action){

    switch(action.type){
        case FETCH_SUCCESS_GET_STVORKI:
            
            return {
                ...state, ...{stvorki:action.data}
            }
        default:
            return state
    }
}