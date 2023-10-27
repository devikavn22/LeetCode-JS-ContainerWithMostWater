/*
You are given an integer array height of length n.
 There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented 
by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const currentWater = minHeight * width;

    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

/*
time complexity = O(n)
space complexity = O(1)

The above solution/algorithm is the implementation of the Two-Pointer Technique.
 one at the beginning of the array (left) and one at the end of the array (right). 
 It calculates the current water container's volume using the minimum height 
 of the two lines and the width between them. Then, it updates the maximum water container found so far.

By moving the pointers inward based on the shorter line, this approach ensures 
that you explore all possible containers. 
The algorithm terminates when the two pointers meet, ensuring that you've considered 
all possible combinations. The result is the maximum amount of water that can be stored.
*/
