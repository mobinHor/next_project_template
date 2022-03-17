import {api} from '../../index'


export const GetCode = (email) => {
    
    const data = {
        email : email
    }
    return api({
        url : '/accounts/email_verification',
        method : 'POST',
        data : data
    })
}

export const SignUp = (form) => {
    
    const data = {
        email : form.email,
        code : form.code,
        password : form.password
    }
    return api({
        url : '/accounts/sign_up',
        method : 'POST',
        data : data
    })
}

export const Login = (form) => {
    
    const data = {
        email : form.email,
        password : form.password
    }
    return api({
        url : '/accounts/login',
        method : 'POST',
        data : data
    })
}

export const GetCodeForResetPass = (email) => {
    
    const data = {
        email : email,
    }
    return api({
        url : '/accounts/email_verification',
        method : 'PATCH',
        data : data
    })
}

export const ResetPassword = (form) => {
    
    const data = {
        email : form.email,
        new_passowrd : form.password,
        code : form.code
    }

    return api({
        url : '/accounts/login',
        method : 'PATCH',
        data : data
    })
}

export const GetUserInfo = () => {
    
    return api({
        url : '/accounts/users',
        method : 'POST',
    } , 
    true
    )
}