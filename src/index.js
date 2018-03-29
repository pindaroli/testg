import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import showResults from "./showResults";
//import SimpleForm from "./SimpleForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import PayForm from "./PayForm";
import rulesMap from './rulesMap'

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Field-Level Validation</h2>
            <PayForm onSubmit={showResults} rulesMap={rulesMap}/>
            <Values form="payForm" />
        </div>
    </Provider>,
    rootEl
);