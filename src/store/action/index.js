export const SET_WINDOW = "SET_WINDOW"
export const SET_WIDTH = "SET_WIDTH"
export const SET_HEIGHT = "SET_HEIGHT"
export const SET_TYPE_PROFILE = "SET_TYPE_PROFILE"
export const SET_DOP_OPTCII = "SET_DOP_OPTCII"



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

