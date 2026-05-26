class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        do{
            slow = nums[slow];
            fast = nums[nums[fast]];
        }while(slow != fast)

        let slow2 = 0;
        do{
            slow = nums[slow];
            slow2 = nums[slow2];
        }while(slow2 != slow)

        return slow;

    }
}
