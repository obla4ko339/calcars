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
export const FETCH_GET_TYPE_PROFILE     = "FETCH_GET_TYPE_PROFILE"
export const FETCH_GET_GRASS_PAKET      = "FETCH_GET_GRASS_PAKET"
export const FETCH_SUCCESS_GET_PROFILE  = "FETCH_SUCCESS_GET_PROFILE"
export const FETCH_SUCCESS_GET_STVORKI  = "FETCH_SUCCESS_GET_STVORKI"
export const FETCH_GET_ARRAY_PRICE_GRASS= "FETCH_GET_ARRAY_PRICE_GRASS"
export const FETCH_GET_INFO_STWORKA     = "FETCH_GET_INFO_STWORKA"
export const GET_GRASS_SELECT_PAKET     = "GET_GRASS_SELECT_PAKET"
export const GET_PRICE_PARAMS_WIN       = "GET_PRICE_PARAMS_WIN"    
export const GET_PROFILE_ID             = "GET_PROFILE_ID"
export const TOTAL_GET_DATA             = "TOTAL_GET_DATA"


export const totalGetData = ()=>(
    {
        type:TOTAL_GET_DATA
    }
)

export const getProfileId = (data)=>(
    {
        type:GET_PROFILE_ID,
        data:data
    }
)


export const getPriceParamsWin = (data) =>(
    {
        type:GET_PRICE_PARAMS_WIN,
        data:data
    }
)

export const getGrassSelectPaket = (data)=>(
    {
        type:GET_GRASS_SELECT_PAKET,
        data:data
    }
)

export const fetchGetInfoStworka = (listStworka)=>(
    {
        type:FETCH_GET_INFO_STWORKA,
        data:listStworka
    }
)

export const fetchGetArrayPriceGrass = (listPriceGrass)=>(
    {
        type:FETCH_GET_ARRAY_PRICE_GRASS,
        data:listPriceGrass 
    }
)

export const fetchSuccessGetProfile = (typeProfileProps) =>(
    {
        type:FETCH_SUCCESS_GET_PROFILE,
        data:typeProfileProps
    }
)

export const fetchSuccessGetStvorki = (listStvorki)=>(
    {
        type:FETCH_SUCCESS_GET_STVORKI,
        data:listStvorki
    }
)

export const fetchGetGrassPaket = (listGrass) =>(
    {
        type:FETCH_GET_GRASS_PAKET,
        data:listGrass
    }
)

export const fetchGetTypeProfile = (listTypeProfile) =>(
    {
        type:FETCH_GET_TYPE_PROFILE,
        data:listTypeProfile
    }
)

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

