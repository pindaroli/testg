class RuleNode {
    constructor (fieldName,startPos,len,isMandatory,index) {
        this.fieldName=fieldName;
        this.startPos=startPos;
        this.len=len;
        this.isMandatory=(isMandatory===undefined)?false:isMandatory;
        this.index=index;
    }
}

export default RuleNode;