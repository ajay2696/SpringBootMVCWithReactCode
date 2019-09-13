import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

const rootId =  document.getElementById('root');
ReactDOM.render(<HashRouter><App/></HashRouter>,rootId);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot && process.env.NODE_ENV === "development") {
  console.log("Hot")
        module.hot.accept("./App", () => {
          const NextApp = require("./App").default;
          ReactDOM.render(<NextApp />, rootId);
        })
}
