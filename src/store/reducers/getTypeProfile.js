import {FETCH_GET_TYPE_PROFILE} from '../action'


export default function getProfile(state=null, action){

    switch(action.type){
        case FETCH_GET_TYPE_PROFILE:
            return{
                ...state, ...{profile:{...action.data}}
            }
        default:
            return state

    }
}