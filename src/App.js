import React from 'react';
import Typewindows from './components/Typewindows';
import {listWindows} from './components/data/list';
import {listprofile} from './components/data/typeprofiledata'
import {dopList} from './components/data/dopList'
import Sliderrange from './components/Sliderrange'
import Typeprofile from './components/Typeprofile'
import Dopprofile from './components/Dopprofile'
import Sizewind from './components/Sizewind'
import Bigwind from './components/Bigwind'
import Paket from './components/Paket'
import Stvorki from './components/Stvorki'
import Feedback from './components/Feedback'
import './static/style/app.css'
import './components/Sliderrange/style.css'
import './components/Typeprofile/style.css'
import './components/Dopprofile/style.css'
import './components/Sizewind/style.css'




 export default class App extends React.Component{
    
  constructor(props){
    super(props)

    this.state = {
      indexImg:1, 
      totalPrice:0,
      dopOptciiState:0,
      profileId:0
    }
  
  }

  totalPrice(){
    let objState = this.props.pricetotal
    let priceWindow = objState.pricedef
    let priceTypeProfile = objState.typeProfileProps ? objState.typeProfileProps.pricedef : 0
    let dopForWind = objState.price ? objState.price : 0
    let priceForWind = 0
    for(let priceDop in dopForWind){
      priceForWind += parseInt(dopForWind[priceDop])
    }
    
    let result = parseInt(priceForWind) + parseInt(this.props.priceParams.priceService)
    return result
  }


  hadleImg(index){
     
    this.setState({indexImg:index})
    this.props.fetchSetWinFunc(index)
    //this.props.hadleWindow(index);
    let dopprofileId = document.getElementsByClassName("dop-profile")
    let typeprofile = document.getElementsByClassName("type-profile")
    // for(let i=0; i<typeprofile.length; i++){
    //   typeprofile[i].checked = false
    // }
    for(let i=0; i<dopprofileId.length; i++){
      dopprofileId[i].checked = false
    } 
    this.props.getTypeWinFunc(index)
    this.props.totalGetDataFunc()
    

    return index;
  }

  
      
      

    componentWillMount(){
      const {fetchListSuccessFunc} = this.props
      fetchListSuccessFunc()

      this.props.fetchGetDopOptciiFunc()
      this.props.fetchGetProfile()
      this.props.fetchGetGrassPaketHolder()
      this.props.fetchSuccessGetProfileFunc()
      this.props.fetchSuccessGetStvorkiFunc()
      this.props.fetchGetArrayPriceGrassFunc()
      
     
    }

    onHandleStvorki(data){
     
      this.props.fetchGetInfoStworkaFunc(data.currentTarget.dataset.id) 
      this.props.totalGetDataFunc()
    }

    handleGrassPoket(data){
      
      this.props.getGrassSelectPaketFunc(data.currentTarget.dataset.id)
      this.props.totalGetDataFunc()
    }

    handleSetTypeProfile(data){
      this.props.fetchSetTypeProfileFunc(data)
      this.props.getProfileIdFunc(data)
      this.props.totalGetDataFunc() 
      //this.state.profileId == 0 ? this.setState({profileId:1}) : this.setState({profileId:0})
      this.setState({profileId:data})
    }


    handleTypeMontag(e){
      let idMntag = e.currentTarget.dataset.montag 
      this.props.getIdForMontagFunc(idMntag)
      let dopprofileId = document.getElementsByClassName("dop-profile")
        for(let i=0; i<dopprofileId.length; i++){
          dopprofileId[i].checked = false
        } 

    }


    handleBtnProps(e, dataState){
     
      
      fetch("http://v339.ru/jsonhandle/jsonhandle.php", {
        method:"post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
         },
        body:"nameuser="+dataState.userName+"&userTelephone="+dataState.userTelephone+"&typeWin="+this.props.titlewind+"&typeProfile="+JSON.stringify(this.props.typeProfileProps)+"&price="+this.props.priceParams.priceService+"&typePols="+this.props.idMontag+"&dopsParams="+JSON.stringify(this.props.listDopParams)+"&getGrassPaket="+JSON.stringify(this.props.listGrass)
         
      })
      .then((response)=> response.json())

    }

    

  render(){
    if(!listWindows) return false
    if(!this.props.dopElement) return false
    if(!this.props.profile) return false
    if(!this.props.listGrass) return false
    if(!this.props.getStvorki) return false
    if(!this.props.id) return false 
    if(!this.props.typeProfileProps) return false
    //if(!this.props.priceParams) return false 
    if(!this.props.listGrass.listGrass[this.state.profileId ? this.state.profileId : "0"]) return false
    
    
    
    
      
      return(
          <div className="container-widget-calc">

              <div className="container-widget-calc-block">
             
                <div> 
                    {
                      listWindows.map((item)=>(
                        <div key={item.id} onClick={()=>{this.hadleImg(item.id)}} >
                          <Typewindows imgwindows={item.imgwindows}   titlewind={item.titlewind} />
                        </div>
                      ))
                    }
                </div>

                <div className="main-img-scroll"> 
                      

                  <div className="img-with-scroll">
                  
                  <div>
                  {
                    // this.state.indexImg ? listWindows[this.state.indexImg].bigimg : "No photo"
                    // this.state.indexImg ? <Bigwind bigSizeImg={listWindows[this.props.windowProps].bigimg}/> : "No photo"
                    this.state.indexImg ? <Bigwind bigSizeImg={listWindows[this.props.id].bigimg}/> : "No photo"
                  }
                  </div>

                
                                    
                  </div>


                </div>


                <div> 
                  
                  <div>
                  <div className="titleCalc"> 
                  Тип профиль
                </div>
                  <div className="blockTotalStyle">
                    {
                      this.props.profile.profile[this.props.id].map((item, index)=>(
                        <div key={index}>
                        <Typeprofile 
                        idProfile={item.idProfile} 
                        nameForm="typeProfile"  
                        checkDefault = {item.checkDefault}
                        index={item.id}
                        nameProfile={item.namePfile}
                        //handleSetTypeProfile={this.props.handleSetTypeProfile}
                        handleSetTypeProfile={this.handleSetTypeProfile.bind(this)}
                        //fetchSetTypeProfileFunc = {this.props.fetchSetTypeProfileFunc}
                        fetchSetTypeProfileFunc = {this.handleSetTypeProfile.bind(this)}
                        key={item.id}
                        />
                        </div>
                      ))
                    }
                    </div>
                  </div>


                  <div>
                    <div className="titleCalc"> 
                      Стеклопакет
                    </div>
                    
                   
                    <div className="blockTotalStyle">
                    {
                      // error profileId
                      //this.props.listGrass.listGrass[this.props.typeProfileProps.id].map((item, index)=>(
                        this.props.listGrass.listGrass[this.state.profileId].map((item, index)=>(
                        <div key={index}>
                        <Paket 
                        dataid={item.id}
                        checkDefault={item.checkDefault}
                        idProfile={item.idProfile}    
                        namePfile={item.namePfile}
                        handleGrassPoket={this.handleGrassPoket.bind(this)}  
                        />
                        </div>
                      ))
                    }
                    </div>
                 
                  </div>

                  <div>
                    <div className="titleCalc"> 
                    Створка
                    </div>

                    <div className="blockTotalStyle">
                    {
                     
                      this.props.getStvorki.stvorki.map((item, index)=>(
                        <div key={index}>
                                <Stvorki idStvorki={item.idProfile} idSt={item.id} nameStvorki={item.namePfile} checkDefault={item.checkDefault} onHandleStvorki={this.onHandleStvorki.bind(this)} />
                        </div> 
                      ))
                     
                    }
                    </div>
                  </div>


                  <div className="containerSize">
                    <Sizewind nameForm="widthWind" idForm="widthWind"  sizeWind={this.props.widthdef ? this.props.widthdef : 0} typeSize="Ширина" hadleSetWidth={this.props.hadleSetWidth} />
                    <Sizewind nameForm="heightWind" idForm="heightWind"  sizeWind={this.props.heightdef ? this.props.heightdef : 0} typeSize="Высота"/>  
                  </div>

                  <div className="container_dopService">
                  <div className="titleCalc"> 
                      Дополнительно
                    </div>

                     <div className="container_montah_polls">
                        <div className="pollPanel" data-montag="0" className={this.props.idMontag == "0" ? "activeMontag" : ""} onClick={(e)=>{this.handleTypeMontag(e)}}>
                        С монтажом в панели
                        </div>
                        <div className="pollKirp" data-montag="1" className={this.props.idMontag == "1" ? "activeMontag" : ""} onClick={(e)=>{this.handleTypeMontag(e)}}>
                        С монтажом в кирпиче
                        </div>
                      </div> 

                    <div className="dopService"> 
                    <div className="blockTotalStyle">
                  {
                    this.props.dopElement.dopOptcii[this.props.id ? this.props.id : 0][this.props.idMontag ? this.props.idMontag : 0].map((item, index)=>(
                      <div key={item.id}>
                      
                        <Dopprofile nameForm={item.nameForm}   valueInput={item.name} idForm={item.name} index={item.id}  priceDop={item.pricedef} fetchSetDopOptciiFunc={this.props.fetchSetDopOptciiFunc} />
                      </div>
                    ))
                  }
                  </div>
                  </div>
                  </div>

                  <div>
                 
                  <div className="container-price-block">
                  <div className="titleCalc price-title">
                  Стоимость
                  
                  <div className="container_price_call">
                  <div className="price-number">
          
                  {
                    this.props.pricedef ? this.totalPrice() : 0
                  }
                  ₽
                  </div>

                  <div className="container_btnCallBack">
                    <Feedback handleBtnProps={this.handleBtnProps.bind(this)} />

                   


                  </div>
                  </div>

                  </div>
                  <span className="textSmolle">Более подробно по стоимости и рассчетам Вас проконсультирует Менеджер компании "АРСПАСТ"</span>
                  </div>

                  </div>
                  
                </div>


              </div>


            </div>
      )
  }

 }


