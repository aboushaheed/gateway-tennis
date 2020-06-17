import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

//////////
// on line
serviceWorker.unregister();
// off line
//serviceWorker.register();
//https://bit.ly/CRA-PWA