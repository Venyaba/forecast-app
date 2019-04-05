import {createStore, applyMiddleware, compose} from 'redux';
// import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from './rootReducer'


const loggerMiddleware = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => "#139BFE",
        prevState: () => "#1c5faf",
        action: () => "#149945",
        nextState: () => "#A47104",
        error: () => "#ff0005"
    }
});



const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools ? devtools : compose;


const store = createStore(
    rootReducer,
    composeEnchancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;

