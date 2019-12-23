import {SET_WINDOW, SET_WIDTH, SET_HEIGHT, SET_TYPE_PROFILE, SET_DOP_OPTCII} from '../action'
import {listWindows} from '../../components/data/list'
import {listprofile} from '../../components/data/typeprofiledata'
import {dopList} from '../../components/data/dopList'

const initialState = {
    windowProps:"0",
    widthProps:"1000",
    heightProps:"1500",
    typeProfileProps:"",
    dopOptciiProps:"",
}




export default function selectWindCalc(state=initialState, action){
    switch(action.type){
        case SET_WINDOW:
        state = listWindows[action.data]
            return {
                ...state, ...{windowProps:action.data}
            }
        case SET_WIDTH:
            return{
                ...state, ...{widthdef:action.data}
            }
        case SET_HEIGHT:
            return{
                ...state, ...{heightdef:action.data}
            }
        case SET_TYPE_PROFILE:
            return{
                ...state, ...{typeProfileProps:listprofile[action.data].pricedef}
            }
        case SET_DOP_OPTCII:
            console.log(action.data)
            return{
                //...state, ...{dopOptciiProps:action.data}
                ...state, ...{price:[action.data[dopList[action.data].pricedef]]}
            }
        default:
            return state;
    }
}
