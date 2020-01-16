import React from 'react'




export default class Dopprofile extends React.Component{
    
    constructor(props){
        super(props)
    }

    stateDopWin(e){
        let objDobParams = {
            index:0,
            stateDop:false
        }
        objDobParams.index = e.currentTarget.dataset.id
        objDobParams.stateDop = e.currentTarget.checked
        this.props.fetchSetDopOptciiFunc({...objDobParams})
        
    }

    render()
    {return (
        <div className="dop-profile">
            <div>
                <input type="checkbox" name={this.props.nameForm} className="dop-profile" value={this.props.valueInput} id={this.props.idForm} data-id={this.props.index}  
                onClick={(e)=> this.stateDopWin(e)}/>
                <label htmlFor={this.props.idForm}>{this.props.valueInput}</label>
            </div>
            <div className="priceForm">
                +{this.props.priceDop}P
            </div>
            
        </div>
    )}
}