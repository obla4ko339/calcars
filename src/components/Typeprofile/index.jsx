import React from 'react'

export default function Typeprofile(props){

    return(
        <div  className="container-profile">
            <div>
                {/* <input type="radio" name={props.nameForm} id={props.idProfile} className="type-profile"  value={props.index} onClick={(e)=>props.handleSetTypeProfile(e.currentTarget.value)}/> */}
                <input type="radio" name={props.nameForm} id={props.idProfile} className="type-profile" defaultChecked={props.checkDefault}  value={props.index} onClick={(e)=>props.fetchSetTypeProfileFunc(e.currentTarget.value)}/>
                <label htmlFor={props.idProfile}>{props.title}</label> 
            </div>
            <div>
                {props.nameProfile}
            </div>
            
        </div>
    )
}