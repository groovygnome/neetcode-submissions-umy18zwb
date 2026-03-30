class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = []
        ans.append(1)

        pref = 1
        for i in range(len(nums)-1):
            pref *= nums[i]
            ans.append(pref)
        ans.reverse()
        nums.reverse()
        post = 1
        for i in range(len(ans)):
            ans[i] *= post
            post *= nums[i]
        ans.reverse()
        return ans
        