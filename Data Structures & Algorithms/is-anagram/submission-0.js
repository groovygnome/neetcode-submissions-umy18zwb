class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let sArray = s.split('');
        let tArray = t.split('');

        for(let i = 0; i < sArray.length; i++){
            let inArray = false;
            for(let j = 0; j < tArray.length; j++){
                if(sArray[i] === tArray[j]){
                    inArray = true;
                    tArray.splice(j, 1);
                    break;
                }
            }
            if(!inArray){
                return false;
            }
        }
        return true;
    }
}
