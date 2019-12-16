import React from 'react'

export default function Typeprofile(props){

    return(
        <div  className="container-profile">
            <div>
                <input type="radio" name={props.nameForm} id={props.idProfile} value={props.title} />
                <label htmlFor={props.idProfile}>{props.title}</label>
            </div>
            <div>
                {props.nameProfile}
            </div>
            
        </div>
    )
}