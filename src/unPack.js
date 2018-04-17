import packer from './packer'
import { formValueSelector } from 'redux-form'



const sub=(store,rulesMap,event) =>{
    const selector = formValueSelector('payForm');
    const buffer=selector(store.getState(),'Buffer');
    if (buffer === undefined || buffer.length!==2000) {
        window.alert("Dimensione del buffer non corretta");
        return;
    }
    packer.unpack(buffer,rulesMap,store);
}

const subCurr=(store,rulesMap) => ((event)=>sub(store,rulesMap,event));

export default (subCurr);