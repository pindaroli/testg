import packer from './packer'
import {packBuffer} from './actions/actionTypes'
import {  actions } from 'react-redux-form'
//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const sub=(store,rulesMap,values) =>{
    //await sleep(500); // simulate server latency
    const buffer=packer.pack(rulesMap,values);
    window.alert(`You submitted:\n\n${JSON.stringify(buffer)}`);
    window.alert(store);
    const action=packBuffer(buffer);
    store.dispatch(actions.change('payForm.values.Buffer',buffer));
}
const subCurr=(store,rulesMap) => ((values)=>sub(store,rulesMap,values));


export default (subCurr);
