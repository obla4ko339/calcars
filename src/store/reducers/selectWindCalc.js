import {SET_WINDOW, 
        SET_WIDTH, 
        SET_HEIGHT, 
        SET_TYPE_PROFILE, 
        SET_DOP_OPTCII, 
        FETCH_LIST_SUCCESS, 
        FETCH_SET_WIND, 
        FETCH_SET_TYPE_PROFILE, 
        FETCH_SET_DOP_OPTCII, 
        FETCH_SUCCESS_GET_PROFILE} from '../action'
import {listWindows} from '../../components/data/list'
import {listprofile} from '../../components/data/typeprofiledata'
import {dopList} from '../../components/data/dopList'
import {sizePrice} from '../../components/data/sizePrice'


const initialState = {
    windowProps:"0",
    widthProps:"1000",
    heightProps:"1500",
    typeProfileProps:"",
    dopOptciiProps:"",
}






let listDopObj = {}


export default function selectWindCalc(state=listWindows[0], action){
   
    switch(action.type){
        case FETCH_LIST_SUCCESS:
            
            return {
                ...state, ...action.data[0], ...{typeProfileProps:{id:"0"}}
            }
        case FETCH_SUCCESS_GET_PROFILE:
            return {
                ...state, ...{typeProfileProps:{...action.data[0][0]}}
            }

        case FETCH_SET_WIND:
                for(let prof in  state.typeProfileProps){
                    state.typeProfileProps[prof] = 0
                }
                
                if(state.price){
                    for(let dop in state.price){
                        state.price[dop] = 0
                    }
                }

            return {...state, ...action.data}

        case FETCH_SET_TYPE_PROFILE:
           
            return {
                ...state, ...{typeProfileProps:{...action.data[state.id][action.id]}}
            }

        case FETCH_SET_DOP_OPTCII:
                
               
               
                if(action.id.stateDop){
                    listDopObj[action.data[state.id][action.id.index].nameForm] = action.data[state.id][action.id.index].pricedef
                }else{
                    listDopObj[action.data[state.id][action.id.index].nameForm] = 0
                }
            
        return {
            ...state, ...{price:{...listDopObj}}
        }

        case SET_WINDOW:
        state = listWindows[action.data]
            state.price = 0
           
            for(let i=0; i<dopList.length; i++){
                listDopObj[dopList[state.id][i].nameForm] = 0
            }
            return {
                ...state, ...{windowProps:action.data}
            }
        case SET_WIDTH:
            
            let priceWidths = (parseInt(state.widthdef) * parseInt(state.heightdef)) + sizePrice 
            return{
                ...state, ...{widthdef:action.data}, ...{pricedef:priceWidths}
            }
        case SET_HEIGHT:
            return{
                ...state, ...{heightdef:action.data}
            }
        case SET_TYPE_PROFILE:
              
            return{
                ...state, ...{typeProfileProps:{...listprofile[state.id][action.data]}}
                
            }
        case SET_DOP_OPTCII:
               
                if(action.data.stateDop){
                    listDopObj[dopList[state.id][action.data.index].nameForm] = dopList[state.id][action.data.index].pricedef
                }else{
                    listDopObj[dopList[state.id][action.data.index].nameForm] = 0
                }
            
            
            return{
                ...state, ...{price:{...listDopObj}}
            }
        default:
            return state;
    }
}
