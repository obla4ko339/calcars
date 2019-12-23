import React from 'react'

export default function Sliderrange(props){

    return(
        <div className="slidecontainer">
            {/* <input type="range" min={props.minVal} max={props.maxVal} value={props.defValue} className="slider" id="myRange"></input> */}
            <input type="range" min={props.minVal} max={props.maxVal} defaultValue={props.defVal}  className="slider" id="myRange" onChange={(e)=>props.hadleSetWidth(e.currentTarget.value)}></input>
        </div>
    )
}