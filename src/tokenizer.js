function getToken(header, date) {
    const isoDate = date.toISOString();
    return header.padEnd(11,'0')+isoDate;

}
console.log(getToken("pippo",new Date()))