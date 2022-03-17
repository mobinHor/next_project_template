

export const HasNumber = (value)=>{
    let regex = /\d/
    if(value.match(regex)){
        return true
    }else{
        return false
    }
}