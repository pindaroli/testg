import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import submitter from "./submitter";
import pack from './pack';
import unPack from './unPack'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import PayForm from "./PayForm";
import rulesMap from './rulesMap'

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Field-Level Validation</h2>
            <PayForm onSubmit={submitter(store,rulesMap)}
                     rulesMap={rulesMap}
                     pack={pack(store,rulesMap)}
                     unPack={unPack(store,rulesMap)}/>
        </div>
    </Provider>,
    rootEl
);