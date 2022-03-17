

export const CheckDisable = (object)=>{
    let keys = Object.keys(object)
    for(let key of keys){
        if(object[key]===''){
            return true
        }
    }
    return false
}