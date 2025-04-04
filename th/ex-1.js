const moveZeroes = function (nums) {
  // set left right pointers
  let l = 0, r = 1

  while (r < nums.length) {
    // if found valid number swap with the l index
    // and move l index by 1
    if (nums[r] !== 0) {
      let tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp
      l++
    }

    // if r isnt valid move r index by 1
    r++
  }

  return nums
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
