import packer from './packer'
//import {packBuffer} from './actions/actionTypes'
//import {  change } from 'redux-form'
//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const sub=(store,rulesMap,values) =>{
    //await sleep(500); // simulate server latency
    const buffer=packer.pack(rulesMap,values);
    fetch('/hello')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
}

const subCurr=(store,rulesMap) => ((values)=>sub(store,rulesMap,values));


export default (subCurr);
