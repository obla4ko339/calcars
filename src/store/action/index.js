export const SET_WINDOW                 = "SET_WINDOW"
export const SET_WIDTH                  = "SET_WIDTH"
export const SET_HEIGHT                 = "SET_HEIGHT"
export const SET_TYPE_PROFILE           = "SET_TYPE_PROFILE"
export const SET_DOP_OPTCII             = "SET_DOP_OPTCII"
export const FETCH_LIST_SUCCESS         = "FETCH_LIST_SUCCESS"
export const FETCH_SET_WIND             = "FETCH_SET_WIND"
export const FETCH_SET_TYPE_PROFILE     = "FETCH_SET_TYPE_PROFILE"
export const FETCH_SET_DOP_OPTCII       = "FETCH_SET_DOP_OPTCII"
export const FETCH_GET_DOP_OPTCII       = "FETCH_GET_DOP_OPTCII"

export const fetchListSuccess = (list)=>(
    {
        type:FETCH_LIST_SUCCESS,
        data:list
    }
)

export const fetchSetWind = (idWind)=>(
    {
        type:FETCH_SET_WIND,
        data:idWind
    }
)

export const fetchSetTypeProfile = (typeProfile, typeProfileId)=>(
    {
        type:FETCH_SET_TYPE_PROFILE,
        data:typeProfile,
        id:typeProfileId
    }
)

export const fetchSetDopOptcii = (dopOptcii, dopOptciiId)=>(
    {
        type:FETCH_SET_DOP_OPTCII,
        data:dopOptcii,
        id:dopOptciiId
    }
)

export const fetchGetDopOptcii = (dopOptcii)=>(
    {
        type:FETCH_GET_DOP_OPTCII,
        data:dopOptcii
    }
)

export const setWindow = (widthSet)=>({
    type:SET_WINDOW,
    data:widthSet
})

export const setWidth = (widthSet)=>({
    type:SET_WIDTH,
    data:widthSet
})

export const setHeight = (heightSet)=>({
    type:SET_HEIGHT,
    data:heightSet
})

export const setTypeProfile = (typeProfileSet)=>({
    type:SET_TYPE_PROFILE,
    data:typeProfileSet
})

export const setDopOptcii = (dopOptciiSet)=>({
    type:SET_DOP_OPTCII,
    data:dopOptciiSet
})

