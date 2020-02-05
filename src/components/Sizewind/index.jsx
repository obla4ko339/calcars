import React from 'react'


export default function Sizewind(props){


    return(
        <div className="sizeWind">
            <div className="titleCalc">
                {props.typeSize}
            </div>
            <div className="blockTotalStyle">
            <div className="sizeWH">
                <div name={props.nameForm} id={props.idForm}  placeholder={props.sizeWind}  >{props.sizeWind} <span className="mmSize">мм</span> </div>
            </div>
            </div>
            
        </div>
    )

}