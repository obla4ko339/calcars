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
      dopOptciiState:0
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
   
    let result = parseInt(priceWindow) + parseInt(priceTypeProfile) + parseInt(priceForWind)
    return result
  }


  hadleImg(index){
     
    this.setState({indexImg:index})
    this.props.fetchSetWinFunc(index)
    //this.props.hadleWindow(index);
    let dopprofileId = document.getElementsByClassName("dop-profile")
    let typeprofile = document.getElementsByClassName("type-profile")
    for(let i=0; i<typeprofile.length; i++){
      typeprofile[i].checked = false
    }
    for(let i=0; i<dopprofileId.length; i++){
      dopprofileId[i].checked = false
    }
    return index;
  }

  


    componentWillMount(){
      const {fetchListSuccessFunc} = this.props
      fetchListSuccessFunc()

      this.props.fetchGetDopOptciiFunc()
      this.props.fetchGetProfile()
      this.props.fetchGetGrassPaketHolder()
      this.props.fetchSuccessGetProfileFunc()
    }

  render(){
    if(!listWindows) return false
    if(!this.props.dopElement) return false
    if(!this.props.profile) return false
    if(!this.props.listGrass) return false
   
    
    
    
      
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
                  <div className="scroll-vertical">
                    <Sliderrange minVal="500" maxVal="2400" defVal="1500" hadleSetWidth={this.props.handleSetHeight}/>
                  </div>    

                  <div className="img-with-scroll">
                  
                  <div>
                  {
                    // this.state.indexImg ? listWindows[this.state.indexImg].bigimg : "No photo"
                    // this.state.indexImg ? <Bigwind bigSizeImg={listWindows[this.props.windowProps].bigimg}/> : "No photo"
                    this.state.indexImg ? <Bigwind bigSizeImg={listWindows[this.props.id].bigimg}/> : "No photo"
                  }
                  </div>

                  <div>
                   <Sliderrange minVal="1000" maxVal="1600" defVal="1330" hadleSetWidth={this.props.hadleSetWidth} />
                  </div>
                                    
                  </div>


                </div>


                <div> 
                  
                  <div>
                  <div className="titleCalc"> 
                  Тип профиль
                </div>
                  {
                    this.props.profile.profile[this.props.id ? this.props.id : 0].map((item, index)=>(
                      <div key={item.id}>
                      <Typeprofile 
                      idProfile={item.idProfile} 
                      nameForm="typeProfile"  
                      
                      index={item.id}
                      nameProfile={item.namePfile}
                      handleSetTypeProfile={this.props.handleSetTypeProfile}
                      fetchSetTypeProfileFunc ={this.props.fetchSetTypeProfileFunc}
                      key={item.id}
                      />
                      </div>
                    ))
                  }
                  </div>


                  <div>
                    <div className="titleCalc"> 
                      Стеклопакет
                    </div>
                    
                 
                    {
                      this.props.listGrass.listGrass[this.props.id ? this.props.id : 0][0].map((item, index)=>(
                        <div key={index}>
                        <Paket 
                        idProfile={item.idProfile}    
                        namePfile={item.namePfile}
    
                        />
                        </div>
                      ))
                    }

                 
                  </div>


                  <div className="containerSize">
                    <Sizewind nameForm="widthWind" idForm="widthWind"  sizeWind={this.props.widthdef ? this.props.widthdef : 0} typeSize="Ширина" hadleSetWidth={this.props.hadleSetWidth} />
                    <Sizewind nameForm="heightWind" idForm="heightWind"  sizeWind={this.props.heightdef ? this.props.heightdef : 0} typeSize="Высота"/>  
                  </div>

                  <div className="container_dopService">
                  <div className="titleCalc"> 
                      Дополнительно
                    </div>
                    <div className="dopService"> 
                  {
                    this.props.dopElement.dopOptcii[this.props.id ? this.props.id : 0].map((item, index)=>(
                      <div key={item.id}>
                      
                        <Dopprofile nameForm={item.nameForm}   valueInput={item.name} idForm={item.name} index={item.id}  priceDop={item.pricedef} fetchSetDopOptciiFunc={this.props.fetchSetDopOptciiFunc} />
                      </div>
                    ))
                  }
                   
                  </div>
                  </div>

                  <div>
                 
                  <div className="container-price-block">
                  <div className="titleCalc price-title">
                  Стоимость
                  
                  </div>
                  <div className="price-number">
          
                  {
                    this.props.pricedef ? this.totalPrice() : 0
                  }
                  ₽
                  </div>
                  </div>

                  </div>
                  
                </div>


              </div>


            </div>
      )
  }

 }


