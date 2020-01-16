const listWindows = [
    {id:"0", pricedef:"9250", widthdef:"1000", heightdef:"1400", titlewind:"1 створка", imgwindows:"https://www.oknakomforta.ru/wincalc18/images/win-1-t.png", bigimg:"https://www.oknakomforta.ru/wincalc18/images/constructor/window-1-frame.jpg"},
    {id:"1", pricedef:"7500", widthdef:"1000", heightdef:"1400", titlewind:"2 створки", imgwindows:"https://www.oknakomforta.ru/wincalc18/images/win-2-t.png", bigimg:"https://www.oknakomforta.ru/wincalc18/images/constructor/window-2-frame.jpg"},
    {id:"2", pricedef:"11100", widthdef:"1500", heightdef:"1400", titlewind:"3 створки", imgwindows:"https://www.oknakomforta.ru/wincalc18/images/win-3-t.png", bigimg:"https://www.oknakomforta.ru/wincalc18/images/constructor/window-3-frame.jpg"},
    {id:"3", pricedef:"10550", widthdef:"1000", heightdef:"1400", titlewind:"Балкон", imgwindows:"https://www.oknakomforta.ru/wincalc18/images/win-b-t.png", bigimg:"https://www.oknakomforta.ru/wincalc18/images/constructor/window-b-frame.jpg"}
]


// let resultListWin = null

// fetch("http://v339.ru/listWindows.php")
//     .then(response=>(response.json()))
//     .then(result=>{resultListWin = result})

async function getData(){
let resultList = null
let response = await fetch("http://v339.ru/listWindows.php")
let ressult = await response.json()
let resultData = await ressult
resultList = ressult
return resultData
}



// function FetchAll(){
// fetch("http://v339.ru/listWindows.php")
//     .then(response=>{return response.json()})
//     .then(result=>{
           
//             return result
//     })
// }




//    let response = fetch("http://v339.ru/listWindows.php")
//    response.then(response=>{return response.json()})
//    response.then(result=>{return result})



function fetchAll(fetchList){
    fetch("http://v339.ru/listWindows.php")
    .then(response=>{return response.json()})
    .then(data=>{
        fetchList(data)   
        console.log(data) 
        
    })
}
let obj = {}
function fetchList(list){
    obj = list
    return list
}

fetchAll(fetchList)
setTimeout(function(){
    console.log(obj) 
}, 3000)
   




export{
    listWindows
    
}