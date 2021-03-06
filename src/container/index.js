import {connect} from 'react-redux'
import App from '../App'
import {setWindow, setWidth, setHeight , setTypeProfile, setDopOptcii, fetchListSuccess, fetchSetWind, fetchSetTypeProfile, fetchSetDopOptcii, fetchGetDopOptcii} from '../store/action'



const mapStateToProps = (state)=>(
    {
        windowProps:state.selectWindCalc.windowProps,
        widthProps:state.selectWindCalc.widthProps,
        heightProps:state.selectWindCalc.heightProps,
        typeProfileProps:state.selectWindCalc.typeProfileProps,
        dopOptciiProps:state.selectWindCalc.dopOptciiProps,

        id:state.selectWindCalc.id,
        pricedef:state.selectWindCalc.pricedef,
        widthdef:state.selectWindCalc.widthdef,
        heightdef:state.selectWindCalc.heightdef,
        titlewind:state.selectWindCalc.titlewind,
        imgwindows:state.selectWindCalc.imgwindows,
        bigimg:state.selectWindCalc.bigimg,
        windowProps:state.selectWindCalc.windowProps,
        pricetotal:state.selectWindCalc,

       dopElement:state.getDopOptcii
    }
  )


const mapDispatchToProps = (dispatch)=>({
    fetchListSuccessFunc:()=>{
        fetch("http://v339.ru/listWindows.php")
        .then(response=>{return response.json()})
        .then(data=>{
            dispatch(fetchListSuccess(data))
        })
    },
    fetchSetWinFunc:(idWin)=>{
        fetch("http://v339.ru/listWindows.php")
        .then(response=>{return response.json()})
        .then(data=>{

            dispatch(fetchSetWind(data[idWin]))
        })
    },
    fetchSetTypeProfileFunc:(typeProfile)=>{
        fetch("http://v339.ru/typeProfile.php")
        .then(response=>{return response.json()})
        .then(data=>{
          
            dispatch(fetchSetTypeProfile(data, typeProfile))
        })
    },
    fetchSetDopOptciiFunc:(dopOptciiId)=>{
        fetch("http://v339.ru/dopList.php")
        .then(response=>{return response.json()})
        .then(data=>{
           
            dispatch(fetchSetDopOptcii(data, dopOptciiId))
        })
    },
    fetchGetDopOptciiFunc:()=>{
        fetch("http://v339.ru/dopList.php")
        .then(response=>{return response.json()})
        .then(data=>{
           
            dispatch(fetchGetDopOptcii(data))
        })
    },
    hadleWindow:(wind)=>{
        dispatch(setWindow(wind))
    },
    hadleSetWidth:(widthSet)=>{
        dispatch(setWidth(widthSet))
    },
    handleSetHeight:(heightSet)=>{
        dispatch(setHeight(heightSet))
    },
    handleSetTypeProfile:(typeProfileSet)=>{
        dispatch(setTypeProfile(typeProfileSet))
    },
    hadleSetDopOptcii:(dopOptciiSet)=>{
        dispatch(setDopOptcii(dopOptciiSet))
    }

})


export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
