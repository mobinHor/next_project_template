
const Commafy = ( num ) => {

    try {
        if(num==='' || num===undefined || num===null || isNaN(num)){
            return ''
        }else{
            let intPart = parseInt(num)
            let numLength = intPart.toString().split('').length
            if(num){
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g , ",")
            }else{
                return 0
            }
        }
        
    } catch (error) {
        return ''
    }
}

export default Commafy