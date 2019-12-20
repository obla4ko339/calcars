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
import './static/style/app.css'
import './components/Sliderrange/style.css'
import './components/Typeprofile/style.css'
import './components/Dopprofile/style.css'
import './components/Sizewind/style.css'
import {connect} from 'react-redux'



 export default class App extends React.Component{
    
  constructor(props){
    super(props)

    this.state = {indexImg:1, totalPrice:0}

  }


  hadleImg(index){
    
    this.setState({indexImg:index})
    this.props.hadleWindow(index);
    
    return index;
  }

  render(){
    if(!listWindows) return false;
      
      return(
          <div className="container-widget-calc">

              <div className="container-widget-calc-block">
              {console.log(this.props.windowProps)}
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
                    <Sliderrange minVal="500" maxVal="2400" defVal="1500" />
                  </div>    

                  <div className="img-with-scroll">
                  
                  <div>
                  {
                    // this.state.indexImg ? listWindows[this.state.indexImg].bigimg : "No photo"
                    this.state.indexImg ? <Bigwind bigSizeImg={listWindows[this.props.windowProps].bigimg}/> : "No photo"
                  }
                  </div>

                  <div>
                   <Sliderrange minVal="1000" maxVal="1600" defVal="1330" />
                  </div>
                                    
                  </div>


                </div>


                <div> 
                  
                  <div>
                  {
                    listprofile.map((item, index)=>(
                      <div key={item.id}>
                      <Typeprofile 
                      idProfile={item.idProfile} 
                      nameForm="typeProfile"  
                      title={item.title}
                      nameProfile={item.namePfile}
                      />
                      </div>
                    ))
                  }
                  </div>

                  <div className="containerSize">
                    <Sizewind nameForm="widthWind" idForm="widthWind"  sizeWind="500" typeSize="Ширина"/>
                    <Sizewind nameForm="heightWind" idForm="heightWind"  sizeWind="1500" typeSize="Высота"/>  
                  </div>

                  <div className="dopService">

                  {
                    dopList.map((item, index)=>(
                      <div key={item.id}>
                        <Dopprofile nameForm={item.nameForm} valueInput={item.name} idForm={item.name}  priceDop={item.pricedef} />
                      </div>
                    ))
                  }
                   
                  
                 
                  <div className="container-price-block">
                  <div className="price-title">
                  Стоимость
                  
                  </div>
                  <div className="price-number">
                  {this.state.totalPrice}P
                  </div>
                  </div>

                  </div>
                  
                </div>


              </div>


            </div>
      )
  }

 }


