import {api} from '../../index'


export const GetCategories = (email) => {
    
    const data = {
        email : email
    }
    
    return api({
        url : '/accounts/email_verification',
        method : 'POST',
        data : data
    })
}
