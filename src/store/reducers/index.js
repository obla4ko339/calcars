import {combineReducers} from 'redux'
import selectWindCalc from '../reducers/selectWindCalc'
import getDopOptcii from '../reducers/getDopOptcii'
import getProfile from '../reducers/getTypeProfile'
import getGrassPaket from '../reducers/getGrasPaket'

export const reducers = combineReducers({
    selectWindCalc,
    getDopOptcii,
    getProfile,
    getGrassPaket
})