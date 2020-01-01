import {connect} from 'react-redux'
import App from '../App'
import {setWindow, setWidth, setHeight , setTypeProfile, setDopOptcii} from '../store/action'



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
        pricetotal:state.selectWindCalc
    }
    
  )


const mapDispatchToProps = (dispatch)=>({
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
