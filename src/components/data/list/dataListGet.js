import List from '../list/classList'


let obj = null

    fetch("http://v339.ru/listWindows.php")
.then(response=>(response.json()))
.then(result=>{
    obj = new List(result)
})


const listWins = obj.list

export{
    listWins
}