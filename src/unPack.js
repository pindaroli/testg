import packer from './packer'
import {  change } from 'redux-form'
import { formValueSelector } from 'redux-form'
import rulesMap from "./rulesMap";


const getValues=(selector,state,rulesMap)=> {
    const ret={};
    for(let item of rulesMap) {
        const name=item[1].fieldName;
        const sel=selector(state,name);
        //console.log("sel="+ sel+ "name="+name);
        if (sel===undefined) continue
        ret[name]=sel;
    }
    return ret;
}
const sub=(store,rulesMap,event) =>{
    const selector = formValueSelector('payForm');
    //console.log(getValues(selector,store.getState(),rulesMap));
    const buffer=packer.pack(rulesMap,getValues(selector,store.getState(),rulesMap));
    store.dispatch(change('payForm','Buffer',buffer));
}

const subCurr=(store,rulesMap) => ((event)=>sub(store,rulesMap,event));

export default (subCurr);