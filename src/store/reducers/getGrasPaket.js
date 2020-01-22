import {FETCH_GET_GRASS_PAKET} from '../action'


function getGrassPaket(state=null, action){

    switch(action.type){
        case FETCH_GET_GRASS_PAKET:
            return {
                ...state, ...{listGrass:{...action.data}}
            }
        default:
            return state
    }
}

export default getGrassPaket
