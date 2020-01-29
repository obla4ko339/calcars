import React from 'react'


const Stvorki = (props) =>{


    return (
        <div>
            <div className="listGrasPoket">
            <div>
                <input type="radio" name="listStvorki" id={props.idStvorki} value={props.nameStvorki} data-id={props.idSt} onChange={(e)=>props.onHandleStvorki(e)} />
                <label htmlFor={props.idStvorki}>{props.nameStvorki}</label>
            </div>
            </div>
        </div>
    )
}

export default Stvorki