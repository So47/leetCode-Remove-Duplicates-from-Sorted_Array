# leetCode-Remove-Duplicates-from-Sorted_Array

# Description

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

```

If all assertions pass, then your solution will be accepted.

 

***Example 1:***

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

***Example 2:***

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 ```

***Constraints:***

```
- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.
```


# Complexity

I used two solutions; the first one depends on making a new set with the unique elements which will create a new array that takes O(n + k), 
where 'n' is the size of the input nums array, and 'k' is the number of unique elements.
Then clean the original array and push the unique array items into it >> O(k). So the first solution has time and space complexity O(n + k).

The second solution; uses two pointers: 'k' to keep track of the current position of unique elements, and 'i' to traverse the array. 
When a new unique element is found (i.e., the current element is different from the next element), we copy it to the k-th position in the array and increment k. 
This way, we directly modify the nums array in place and achieve the desired result without using a Set or creating a separate array.

This optimized solution has a time complexity of O(n) and a space complexity of O(1), 
which is an improvement over the previous solution that had additional space for the Set and '{uniqueArr}'.


