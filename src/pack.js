import packer from './packer'
import {  change } from 'redux-form'
import { formValueSelector } from 'redux-form'
const selector = formValueSelector('payForm');
const sub=(store,rulesMap,event) =>{
    console.log(selector(store.getState(),'Buffer'));
    const buffer=packer.pack(rulesMap,selector);
    store.dispatch(change('payForm','Buffer',buffer));
}

const subCurr=(store,rulesMap) => ((event)=>sub(store,rulesMap,event));

export default (subCurr);