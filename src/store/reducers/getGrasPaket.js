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
               
            return {
                ...state, ...{grassPrice:action.data}
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
          
            return{
                ...state, ...{selectProfile:action.data}
            }
        case GET_TYPE_WIN:
            return{
                ...state, ...{selectWin:action.data}
            }   
        case TOTAL_GET_DATA:
                console.log(state)
                console.log(state.selectWin)
                console.log(state.selectProfile)
                console.log(state.selectStworka)
                console.log(state.selectGrass)
                console.log(state.grassPrice)
          
                let totalData = state.grassPrice[state.selectWin][state.selectProfile][state.selectStworka].steklopoket[state.selectGrass].pricedef
                console.log(totalData)
                
                return{
                    ...state, priceService:totalData
                }
           
            

        default:
            return state
    }
}

export default getGrassPaket
