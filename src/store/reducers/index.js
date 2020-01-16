import {combineReducers} from 'redux'
import selectWindCalc from '../reducers/selectWindCalc'
import getDopOptcii from '../reducers/getDopOptcii'

export const reducers = combineReducers({
    selectWindCalc,
    getDopOptcii
})