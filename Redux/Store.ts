// store.js

import {createStore , applyMiddleware , Store} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducers/RootReducer';

// create a makeStore function
const makeStore = () => createStore(
        RootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );

// export an assembled wrapper
export const wrapper = createWrapper<Store<any>>(makeStore, {debug: true});