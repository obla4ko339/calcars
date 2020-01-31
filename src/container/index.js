import {connect} from 'react-redux'
import App from '../App'
import {setWindow, 
        setWidth, 
        setHeight, 
        setTypeProfile, 
        setDopOptcii, 
        fetchListSuccess, 
        fetchSetWind, 
        fetchSetTypeProfile, 
        fetchSetDopOptcii, 
        fetchGetDopOptcii, 
        fetchGetTypeProfile, 
        fetchGetGrassPaket,
        fetchSuccessGetProfile,
        fetchSuccessGetStvorki,
        fetchGetArrayPriceGrass,
        fetchGetInfoStworka,
        getGrassSelectPaket,
        getPriceParamsWin,
        getProfileId,
        totalGetData,
        getTypeWin
    } from '../store/action'



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

        dopElement:state.getDopOptcii,
        profile:state.getProfile,

        listGrass:state.getGrassPaket,
        grassPrice:state.getGrassPaket,
        selectGrass:state.getGrassPaket,

        getStvorki:state.getStvorki,
        stvorkaId:state.getStvorki,



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
    fetchSuccessGetProfileFunc:()=>{
        fetch("http://v339.ru/typeProfile.php")
        .then(response=>{return response.json()})
        .then(data=>{
          
            dispatch(fetchSuccessGetProfile(data))
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
            //dispatch(getProfileId(typeProfile))
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
    fetchGetProfile:()=>{
        fetch("http://v339.ru/typeProfile.php")
        .then(response=>{return response.json()})
        .then(data=>{
          
            dispatch(fetchGetTypeProfile(data))
           
        })
    },
    fetchGetGrassPaketHolder:()=>{
        fetch("http://v339.ru/listGrass.php")
        .then(response=>{return response.json()})
        .then(data=>{
         
            dispatch(fetchGetGrassPaket(data))
        }) 
    },
    fetchSuccessGetStvorkiFunc:()=>{
        fetch("http://v339.ru/listStvorki.php")
        .then(response=>{return response.json()})
        .then(data=>{
         
            dispatch(fetchSuccessGetStvorki(data))
        }) 
    },
    fetchGetInfoStworkaFunc:(id)=>{
        dispatch(fetchGetInfoStworka(id))
    },
    getGrassSelectPaketFunc:(id)=>{
        dispatch(getGrassSelectPaket(id))
    },
    getPriceParamsWinFunc:(id)=>{
       dispatch(getPriceParamsWin(id))
    },
    getProfileIdFunc:(id)=>{
        dispatch(getProfileId(id))
    },
    totalGetDataFunc:()=>{
        dispatch(totalGetData())
    },
    getTypeWinFunc:(data)=>{
        dispatch(getTypeWin(data))
    },
    fetchGetArrayPriceGrassFunc:()=>{
        fetch("http://v339.ru/grassPokket.php")
        .then(response=>{return response.json()})
        .then(data=>{
         
            dispatch(fetchGetArrayPriceGrass(data))
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
