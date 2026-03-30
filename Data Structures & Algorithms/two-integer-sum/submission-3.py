class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indMap = {}
        for i in range(len(nums)):
            remainder = target - nums[i]
            if remainder in indMap:
                return [indMap[remainder], i]
            indMap[nums[i]] = i