import {SET_WINDOW, SET_WIDTH, SET_HEIGHT, SET_TYPE_PROFILE, SET_DOP_OPTCII} from '../action'


const initialState = {
    windowProps:"1",
    widthProps:"1000",
    heightProps:"1500",
    typeProfileProps:"",
    dopOptciiProps:"",
}


export default function selectWindCalc(state=initialState, action){
    switch(action.type){
        case SET_WINDOW:
            return {
                ...state, ...{windowProps:action.data}
            }
        case SET_WIDTH:
            return{
                ...state, ...{widthProps:action.data}
            }
        case SET_HEIGHT:
            return{
                ...state, ...{heightProps:action.data}
            }
        case SET_TYPE_PROFILE:
            return{
                ...state, ...{typeProfileProps:action.data}
            }
        case SET_DOP_OPTCII:
            return{
                ...state, ...{dopOptciiProps:action.data}
            }
        default:
            return state;
    }
}
