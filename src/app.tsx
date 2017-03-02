import "es6-shim";
import * as _ from "lodash";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import ConnectedAppContainer from "./components/AppContainer";
import {ReducersMapObject, applyMiddleware, combineReducers, createStore} from "redux";
import * as createLogger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./state/reducers";


const logger = createLogger();
const reducer = combineReducers(_.assign<any, ReducersMapObject>({}, reducers));
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducer);

const appElement = document.getElementById("app");

if (appElement != null) {
    ReactDOM.render((
        <Provider store={store}>
            <ConnectedAppContainer />
        </Provider>
    ), appElement);
}
