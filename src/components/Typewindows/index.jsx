import React, {useState} from "react"


export default function Typewindows(props){
    return(
        <div className="container-icon-windows">
            <div className="icon-windows-img">
                <img src={props.imgwindows} width="80px"/>
            </div>
            <div className="icon-windows-title">
                {props.titlewind}
            </div>
        </div>
    )
}


