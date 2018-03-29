import RuleNode from './ruleNode'
import rules from './rules'

class RulesMap {
    constructor(rulesArray) {
        const regoMap=new Map();
        let n=rulesArray.length;
        let i;
        for(i=0;i<n;i++) {
            let node=new RuleNode(rulesArray[i][0],rulesArray[i][1]-1,rulesArray[0][2],rulesArray[0][3],i);
            regoMap.set(rulesArray[i][0],node);
        }
        this.regoMap=regoMap;
    }
}
const rulesMap=new RulesMap(rules).regoMap;
export default rulesMap;
