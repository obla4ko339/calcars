import {FETCH_GET_GRASS_PAKET, FETCH_GET_ARRAY_PRICE_GRASS, GET_GRASS_SELECT_PAKET, GET_PRICE_PARAMS_WIN,FETCH_GET_INFO_STWORKA, GET_PROFILE_ID, TOTAL_GET_DATA,GET_TYPE_WIN} from '../action'

const intialStateForGrass = {
    selectWin:"0",
    selectGrass:"0",
    selectStworka:"0",
    selectProfile:"0",
    priceService:"0"
}

function getGrassPaket(state=intialStateForGrass, action){

    switch(action.type){
        case FETCH_GET_GRASS_PAKET:
            
            return {
                ...state, ...{listGrass:{...action.data}}
            }
        case FETCH_GET_ARRAY_PRICE_GRASS:
              
               let defaultPrice = action.data[state.selectWin][state.selectProfile][state.selectStworka].steklopoket[state.selectGrass].pricedef
               
            return {
                ...state, ...{grassPrice:action.data}, ...{priceService:defaultPrice}
            }
        case GET_GRASS_SELECT_PAKET:
            return {
                 ...state, ...{selectGrass:action.data}   
            }
        case GET_PRICE_PARAMS_WIN:
                return{
                    ...state, ...{paramsWinPrice:action.data}
                }
        case FETCH_GET_INFO_STWORKA:
                return {
                    ...state, ...{selectStworka:action.data}
                } 
        case GET_PROFILE_ID:
                console.log(action.data)
            return{
                ...state, ...{selectProfile:action.data}, ...{selectGrass:"0"}
            }
        case GET_TYPE_WIN:
            return{
                ...state, ...{selectWin:action.data}
            }   
        case TOTAL_GET_DATA:
                
          
                let totalData = state.grassPrice[state.selectWin][state.selectProfile][state.selectStworka].steklopoket[state.selectGrass].pricedef
               
                 
                return{
                    ...state, priceService:totalData
                }
           
            

        default:
            return state
    }
}

export default getGrassPaket
