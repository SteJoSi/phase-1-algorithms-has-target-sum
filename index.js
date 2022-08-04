function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    const complement = target - array[i];

  for(let j = i + 1; j < array.length; j++) {
    if(array[j] === complement)
        return true
    } 
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([1, 5, 7, 12, 15], 20) = returns true (15+5 = 20)

  hasTargetSum([3, 8, 10, 18, 2], 27) = returns false (no two numbers added to create target number)

  iterate through numbers in the array
  if two numbers in the array adds up to target number,
    return true
  else return false

*/

/*
  Add written explanation of your solution here
  - Create a function that takes in an array and target parameters
  - If two numbers in the array are added and their total is the target number, return true
  - If there are no two numbers in the array that are added up to the target number, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
