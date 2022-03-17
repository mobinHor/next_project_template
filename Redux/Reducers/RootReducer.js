import {combineReducers} from 'redux'
import UserReducer from './UserReducer'



const RootReducer = combineReducers({
    User : UserReducer
})


export default RootReducer