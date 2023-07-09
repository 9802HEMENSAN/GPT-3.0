# 1. **Two Sum Problem**: Given an array of integers and a target integer, find the two integers in the array that sum to the target.
#     - *Input*: [2, 7, 11, 15], target = 9
#     - *Output*: "[0, 1]"

def sum_to_target(nums,target) : 
    obj={}

    for i in range(len(nums)) : 
        firstnum=target-nums[i] 

        if firstnum in obj : 
            return [obj[firstnum],i]
        
        obj[nums[i]]=i

nums =  [2, 7, 11, 15]
target = 9

result=sum_to_target(nums,target)
print(result)