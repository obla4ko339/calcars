import React, {useState} from 'react'


function Paket(props){
    

    return(
        <div className="listGrasPoket">
            <div>
                <input type="radio" name="listGrasPoket" id={props.idProfile} defaultChecked={props.checkDefault} data-id={props.dataid} defaultChecked={props.checkDefault} value={props.namePfile} onClick={(e)=>{props.handleGrassPoket(e)}} />
                <label htmlFor={props.idProfile}>{props.namePfile}</label>
            </div>
        </div>
    )
}

export default Paket