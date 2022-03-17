


export const HasUpperCase = (value)=>{
    if(value==='') return false
    let letters = value.split('')
    let hasUpper = false
    letters.forEach(letter => {
        if(/^[A-Z]*$/.test(letter)){
            hasUpper = true
        }
    });
    return hasUpper
}