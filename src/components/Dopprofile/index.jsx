import React from 'react'

export default function Dopprofile(props){

    return (
        <div className="dop-profile">
            <div>
                <input type="checkbox" name={props.nameForm} value={props.valueInput} id={props.idForm} data-id={props.index}  onClick={(e)=>props.hadleSetDopOptcii(e.currentTarget.dataset.id)}/>
                <label htmlFor={props.idForm}>{props.valueInput}</label>
            </div>
            <div className="priceForm">
                +{props.priceDop}P
            </div>
            
        </div>
    )
}