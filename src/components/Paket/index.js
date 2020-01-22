import React, {useState} from 'react'


function Paket(props){
    

    return(
        <div className="listGrasPoket">
            <div>
                <input type="radio" name={props.idProfile} id={props.idProfile} value={props.namePfile} />
                <label htmlFor={props.idProfile}>{props.namePfile}</label>
            </div>
        </div>
    )
}

export default Paket