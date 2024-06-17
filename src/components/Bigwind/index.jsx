import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'




export default function Bigwind(props) {

    const [useStyle, setUseStyle] = useState()
    const [useWin, setUseWin] = useState([])
    let fWin = new Array()
    let fWins = new Array()
    let sizeH = {"heigth":"0"}
    let sizeW = {"weight":"0"}

    const povorot = {
        "transform":"perspective(800px) rotateY(-20deg) scale(0.9, 1)"
    }
    const gluh = {
        "transform":"perspective(800px) rotateY(0deg)"
    }
    const otkidnoe = {
        "transform":"perspective(800px) rotateX(-10deg) scale(1, 0.9)"
    }

    const StyleWin = [
        [
            {"transform":"perspective(800px) rotateY(0deg)"},
            {"transform":"perspective(800px) rotateY(-20deg) scale(0.9, 1)"},
            {"transform":"perspective(800px) rotateX(-10deg) scale(1, 0.9)"}           
        ],
        [
            {"transform":"perspective(800px) rotateY(0deg)"},
            {"transform":"perspective(800px) rotateY(20deg) scale(0.9, 1)"},
            {"transform":"perspective(800px) rotateX(-10deg) scale(1, 0.9)"}            
        ],
        [
            {"transform":"perspective(800px) rotateY(0deg)"},
            {"transform":"perspective(800px) rotateY(-20deg) scale(0.9, 1)"},
            {"transform":"perspective(800px) rotateX(-10deg) scale(1, 0.9)"}           
        ],
    ]


    useEffect( ()=>{
        
        for( let index = 0; index <= props.idWin; index++ ){
            fWins[index] = {
                ...{"index":index, "style":{"transform":"perspective(800px) rotateY(0deg)"}, "active":"0"}
            }
        }
        setUseWin(fWins)
        props.handlerTypeStworka(fWins)
        props.handlerGetDataWin({win:fWins})
        
    },[props.idWin] ) 

    
    

    const handlerChangeWin = (data, index) =>{
            // fWins[index] = {"style":StyleWin[index][data.dataset.val], "index":index}
            setUseStyle( StyleWin[index][data.dataset.val] )

            useWin[index].style = StyleWin[index][data.dataset.val]
            useWin[index].active = data.dataset.val
            setUseWin(useWin)
            props.handlerTypeStworka(useWin)
            props.handlerGetDataWin({win:useWin})


    }



    const getFrameWin = (id) =>{
        if( !id ) return false;

        
        for( let index = 0; index <= id; index++ ){
            fWin.push(index)
        }

        

        const imgWin = [
            "https://oknakomforta.ru/upload/resize_cache/webp/wincalc18/images/constructor/window-s.webp",
            "https://oknakomforta.ru/upload/resize_cache/webp/wincalc18/images/constructor/window-s2.webp",
            "https://oknakomforta.ru/upload/resize_cache/webp/wincalc18/images/constructor/window-s.webp",
        ]
        
        return (
            <div className="wincalc-frames">
                {
                    useWin.map( (value, ind) => (
                        <>
                       
                            <div key={ind} className={`wincalc-frame wincalc-frame-${value.index} `} >
                                <div className={`wincalc-frame-selector select-frame-${value.active} `}>
                                    <div className="wincalc-frame-selector-g" data-val="0" onClick={ (e) => (handlerChangeWin(e.target, value.index)) }>Глухое</div>
                                    <div className="wincalc-frame-selector-p" data-val="1" onClick={ (e) => (handlerChangeWin(e.target, value.index)) } >Поворотное</div>
                                    <div className="wincalc-frame-selector-o" data-val="2" onClick={ (e) => (handlerChangeWin(e.target, value.index)) } >Поворотно-откидное</div>
                                </div>
                                <img className="lazy" style={value.style} data-src={imgWin[value.index]} src={imgWin[value.index]}   />
                            </div>
                        </>
                    ) )
                }
            </div>
        )

    }


    const handlerSize = (data)=>{

        

        if( data.dataset.size === "H" ){
            if( data.value == "" || data.value == 0 ){
                data.value = 0
            }
            sizeH = {"heigth":data.value}
            props.handleSetHeight(data.value)
            props.handlerGetDataWin(sizeH)
        }

        if( data.dataset.size === "W" ){
            if( data.value == "" || data.value == 0 ){
                data.value = 0
            }
            sizeW = {"weight":data.value}
            props.hadleSetWidth(data.value)
            props.handlerGetDataWin(sizeW)
        }

        
        

        console.log(sizeH)
        console.log(sizeW)
        

    }


    return (
        <>
            <div className="input_size size_h">
                <span>высота</span>
                <input type="number" data-size="H" id="sizeWinH" onInput={ (data)=> handlerSize(data.target) } className='sizeWinH' name="sizeWinH" min="0"  />
                <span>мм</span>
            </div>
            <div className="big-size-img">
                <img src={props.bigSizeImg} />
            </div>
            {getFrameWin(props.idWin)}
            <div className="input_size size_w">
                <span>ширина</span>
                <input type="number" data-size="W" id="sizeWinW" onInput={ (data)=> handlerSize(data.target) } className='sizeWinW' name="sizeWinW" min="0"  />
                <span>мм</span>
            </div>
           
        </>
    )
}