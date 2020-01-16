import { listWindows } from ".";


class List{
   
    constructor(listData){
        this.listData = listData
        
    }
   
    set list(list){
        this.listData = list
        console.log(this.listData)
       
    }

    get list(){
        console.log(this.listData)
        return this.listData
    }
    

 
}

export default new List()