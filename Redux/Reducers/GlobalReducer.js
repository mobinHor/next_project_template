import { HYDRATE } from 'next-redux-wrapper'
import * as t from '../Types'


const initialState = {
    test : 'test'
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
        case t.TEST : {
            return {
                ...state,
                test : action.payload
            }
        }
        default : {
            return {...state}
        }
    }
}

export default GlobalReducer

