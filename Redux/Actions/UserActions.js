import * as t from '../Types'


export const StoreUserInfoRedux = (user)=> async  dispatch =>{
    dispatch({
        type : t.GET_USER_INFO,
        payload : user
    })
}