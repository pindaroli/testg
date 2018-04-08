function getToken(header, date) {
    const isoDate = date.toISOString();
    return header.padEnd(11,'0')+isoDate;

}
export default  getToken 