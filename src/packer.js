//import rulesMap from './rulesMap';

//console.log("rulesMap="+rulesMap);
import { change } from 'redux-form'


function getToken(header, date) {
    const isoDate = date.toISOString();
    return header.padEnd(11, '0') + isoDate;

}


const packer = {
    initValues: function (values) {
        const now = new Date();
        const copy = Object.assign({}, values);
        if (copy["PaymentInstructionId"] === undefined) copy["PaymentInstructionId"] = getToken("EndToEntR", now);
        if (copy["EndToEndId"] === undefined) copy["EndToEndId"] = getToken("EndToEntI", now);
        if (copy["ValueDate"]=== undefined) copy["ValueDate"]= now.getFullYear()+(now.getMonth()+1+'').padStart(2,'0')+(now.getDate()+'').padStart(2,'0');



        return copy;
    },
    pack: function (rulesMap,values) {
        const copyVal=this.initValues(values);
        var accum='';
        for (let value of rulesMap) {
            const name=value[1].fieldName;
            const st=(copyVal[name]===undefined)?'':copyVal[name];
            accum=accum+st.padEnd(value[1].len,' ');
        }
        return accum;
    },
    unpack: function (buffer,rulesMap,store) {
        for (let item of rulesMap) {
            const name=item[1].fieldName;
            const val=buffer.substring(item[1].startPos,item[1].startPos+item[1].len).trim();
            //console.log("name="+name+" val="+val);
            if (val!=='') store.dispatch(change("payForm",name,val));
        }
    }
};

export default packer;