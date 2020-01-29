import {combineReducers} from 'redux'
import selectWindCalc from '../reducers/selectWindCalc'
import getDopOptcii from '../reducers/getDopOptcii'
import getProfile from '../reducers/getTypeProfile'
import getGrassPaket from '../reducers/getGrasPaket'
import getStvorki from '../reducers/getStvorki'

export const reducers = combineReducers({
    selectWindCalc,
    getDopOptcii,
    getProfile,
    getGrassPaket,
    getStvorki
})