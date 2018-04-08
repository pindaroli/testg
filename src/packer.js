import rulesMap from './rulesMap';

console.log("rulesMap="+JSON.stringify(rulesMap));

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
    pack: function (values) {
        const copyVal=this.initValues(values);
        var accum='';
        for (let value of rulesMap) {
            const name=value.fieldName;
            console.log("name="+name);
            const st=(copyVal[name]===undefined)?'':copyVal[name];
            accum=accum+st.padEnd(value.len);
        }
        return accum;
    }
}

export default packer;