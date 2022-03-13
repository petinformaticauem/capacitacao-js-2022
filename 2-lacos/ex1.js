const nums = [4, 5, -7, 5, -51, 85, 6, 1, 7, 6, 2, -50, 4];

let min = nums[0];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
  }
  if (nums[i] > max) {
    max = nums[i];
  }
}

console.log(`maior: ${max} menor: ${min}`);
