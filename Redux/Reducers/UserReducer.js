import { HYDRATE } from 'next-redux-wrapper'
import * as t from '../Types'


const initialState = {
    userInfo : null
}

const GlobalReducer = (state = initialState , action)=>{
    switch(action.type){
        case HYDRATE : {
            const nextState = {
                ...state, // use previous state
                ...action.payload, // apply delta from hydration
            }
            return nextState
        }
        case t.GET_USER_INFO : {
            return {
                ...state,
                userInfo : action.payload
            }
        }
        default : {
            return {...state}
        }
    }
}

export default GlobalReducer

