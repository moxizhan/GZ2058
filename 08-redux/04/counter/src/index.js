import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import {store} from "./store/index.js";

import { Provider } from "react-redux";
import store from "./store/index.js";

// console.log(store);
// import { firstName, lastName, year } from './redux/test.js'
// console.log(firstName, lastName, year);

// import * as xxx from './redux/test.js'
// console.log(xxx);

// import yyy from './redux/test.js'
// console.log(yyy);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
