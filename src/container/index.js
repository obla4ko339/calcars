import { connect } from 'react-redux'
import App from '../App'


import {
    setWindow,
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
    getTypeWin,
    getIdForMontag,
    setTypeStworka,
    getDataWin
} from '../store/action'
import Bigwind from '../components/Bigwind'



const mapStateToProps = (state) => (
    {
        windowProps: state.selectWindCalc.windowProps,
        widthProps: state.selectWindCalc.widthProps,
        heightProps: state.selectWindCalc.heightProps,
        typeProfileProps: state.selectWindCalc.typeProfileProps,
        dopOptciiProps: state.selectWindCalc.dopOptciiProps,

        id: state.selectWindCalc.id,
        pricedef: state.selectWindCalc.pricedef,
        widthdef: state.selectWindCalc.widthdef,
        heightdef: state.selectWindCalc.heightdef,
        titlewind: state.selectWindCalc.titlewind,
        imgwindows: state.selectWindCalc.imgwindows,
        bigimg: state.selectWindCalc.bigimg,
        windowProps: state.selectWindCalc.windowProps,
        pricetotal: state.selectWindCalc,
        listDopParams: state.selectWindCalc.price,

        dopElement: state.getDopOptcii,
        profile: state.getProfile,

        listGrass: state.getGrassPaket,
        grassPrice: state.getGrassPaket,
        selectGrass: state.getGrassPaket,
        priceParams: state.getGrassPaket,

        getStvorki: state.getStvorki,
        stvorkaId: state.getStvorki,

        idMontag: state.selectWindCalc.idMontag



    }
)


const mapDispatchToProps = (dispatch) => ({
    fetchListSuccessFunc: () => {
        fetch("https://greenpel.ru/listWindows.php")
            .then(response => { return response.json() })
            .then(data => {
                dispatch(fetchListSuccess(data))
            })
    },
    fetchSuccessGetProfileFunc: () => {
        fetch("https://greenpel.ru/typeProfile.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchSuccessGetProfile(data))
            })
    },
    fetchSetWinFunc: (idWin) => {
        fetch("https://greenpel.ru/listWindows.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchSetWind(data[idWin]))
            })
    },
    fetchSetTypeProfileFunc: (typeProfile) => {
        fetch("https://greenpel.ru/typeProfile.php")
            .then(response => { return response.json() })
            .then(data => {
                //dispatch(getProfileId(typeProfile))
                dispatch(fetchSetTypeProfile(data, typeProfile))
            })
    },
    fetchSetDopOptciiFunc: (dopOptciiId) => {
        fetch("https://greenpel.ru/dopList.php")
            .then(response => { return response.json() })
            .then(data => {


                dispatch(fetchSetDopOptcii(data, dopOptciiId))
            })
    },
    fetchGetDopOptciiFunc: () => {
        fetch("https://greenpel.ru/dopList.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchGetDopOptcii(data))
            })
    },
    fetchGetProfile: () => {
        fetch("https://greenpel.ru/typeProfile.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchGetTypeProfile(data))

            })
    },
    fetchGetGrassPaketHolder: () => {
        fetch("https://greenpel.ru/listGrass.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchGetGrassPaket(data))
            })
    },
    fetchSuccessGetStvorkiFunc: () => {
        fetch("https://greenpel.ru/listStvorki.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchSuccessGetStvorki(data))
            })
    },
    getIdForMontagFunc: (data) => {
        dispatch(getIdForMontag(data))
    },
    fetchGetInfoStworkaFunc: (id) => {
        dispatch(fetchGetInfoStworka(id))
    },
    getGrassSelectPaketFunc: (id) => {
        dispatch(getGrassSelectPaket(id))
    },
    getPriceParamsWinFunc: (id) => {
        dispatch(getPriceParamsWin(id))
    },
    getProfileIdFunc: (id) => {
        dispatch(getProfileId(id))
    },
    totalGetDataFunc: () => {
        dispatch(totalGetData())
    },
    getTypeWinFunc: (data) => {
        dispatch(getTypeWin(data))
    },
    fetchGetArrayPriceGrassFunc: () => {
        fetch("https://greenpel.ru/grassPokket.php")
            .then(response => { return response.json() })
            .then(data => {

                dispatch(fetchGetArrayPriceGrass(data))
            })
    },
    hadleWindow: (wind) => {
        dispatch(setWindow(wind))
    },
    hadleSetWidth: (widthSet) => {
        dispatch(setWidth(widthSet))
    },
    handlerTypeStworka: (data) => {
        dispatch(setTypeStworka(data))
    },
    handleSetHeight: (heightSet) => {
        dispatch(setHeight(heightSet))
    },
    handleSetTypeProfile: (typeProfileSet) => {
        dispatch(setTypeProfile(typeProfileSet))
    },
    hadleSetDopOptcii: (dopOptciiSet) => {
        dispatch(setDopOptcii(dopOptciiSet))
    },
    handlerGetDataWin: (data) => {
        dispatch( getDataWin(data) )
    }

})


export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

