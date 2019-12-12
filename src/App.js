import React from 'react';
import Typewindows from './components/Typewindows';
import {listWindows} from './components/list';
import './static/style/app.css'




 export default class App extends React.Component{
    
  constructor(props){
    super(props)

    this.state = {indexImg:1}

  }


  handleImg(index){
    console.log(index)
    this.setState({indexImg:index})
    return index;
  }

  render(){
    if(!listWindows) return false;
      console.log(listWindows);
      return(
          <div className="container-widget-calc">

              <div className="container-widget-calc-block">

                <div> 
                    {
                      listWindows.map((item)=>(
                        <div key={item.id} onClick={()=>{this.handleImg(item.id)}}>
                          <Typewindows imgwindows={item.imgwindows}   titlewind={item.titlewind} />
                        </div>
                      ))
                    }
                </div>

                <div> 
                  {
                    this.state.indexImg ? listWindows[this.state.indexImg].bigimg : "No photo"
                  }
                </div>


                <div> 
                  
                </div>


              </div>


            </div>
      )
  }

 }



