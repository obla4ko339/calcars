import React from 'react'


export default function Sizewind(props){


    return(
        <div className="sizeWind">
            <div>
                {props.typeSize}
            </div>
            <div>
                <input type="text" name={props.nameForm} id={props.idForm} value={props.sizeWind} placeholder={props.sizeWind}  />
            </div>
            
        </div>
    )

}