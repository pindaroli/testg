import RuleNode from './ruleNode'
import rules from './rules'

class RulesMap {
    constructor(rulesArray) {
        const regoMap=new Map();
        let n=rulesArray.length;
        for(let i=0;i<n;i++) {
            let node=new RuleNode(rulesArray[0],rulesArray[1]-1,rulesArray[2],rulesArray[3],i);
            regoMap.set(rulesArray[0],node);
        }
        this.regoMap=regoMap;
    }
}

const rulesMap=new RulesMap(rules);
export default rulesMap;
