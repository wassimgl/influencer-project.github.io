import rootReducer from './reducers/index';

import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

 export default createStore(rootReducer,
compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
     ); 