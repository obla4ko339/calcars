import React from 'react';
import Typewindows from './components/Typewindows';
import list from './components/list';
;




 export default class App extends React.Component{
    

  render(){
    if(!list) return false;

      return(
          <div className="container-widget-calc">

              <div className="container-widget-calc-block">

                <div> 
                    {
                      list.map((item, index)=>(
                        <div key={item.id}>
                          <Typewindows imgwindows={item.imgwindows}  titlewind={item.titlewind} />
                        </div>
                      ))
                    }
                </div>

                <div> 
                  
                </div>


                <div> 
                  
                </div>


              </div>


            </div>
      )
  }

 }



