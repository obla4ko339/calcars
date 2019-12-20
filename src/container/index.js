import {connect} from 'react-redux'
import App from '../App'
import {setWindow, setWidth, setHeight , setTypeProfile, setDopOptcii} from '../store/action'



const mapStateToProps = (state)=>(
    {
        windowProps:state.selectWindCalc.windowProps,
        widthProps:state.selectWindCalc.widthProps,
    }
    
  )


const mapDispatchToProps = (dispatch)=>({
    hadleWindow:(wind)=>{
        dispatch(setWindow(wind))
    },
    hadleSetWidth:(widthSet)=>{
        dispatch(setWidth(widthSet))
    }
})


export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
