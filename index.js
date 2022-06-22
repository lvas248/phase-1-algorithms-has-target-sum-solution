function hasTargetSum(array, target) {
  // Write your algorithm here

  const seenNumbers = new Set()

  for(const number of array){
    const complement = target - number

    if(seenNumbers.has(complement)) return true
    seenNumbers.add(number)
  }
  return false
}

/* 
  Write the Big O time complexity of your function here:

  O(n)

*/

/* 
  Add your pseudocode here:

  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here:

  I have to create a function where if the sum of any two numbers in an array equal the target number, the function will return true.  The function will return false if no pair of numbers in the array add up to equal the target number.
  For example, if the array in question is [4,5,6] and the target is 8 the function will return false because no two numbers in this array add up to equal the target number.  If the target number were 9, the function would return true because 4 and 5 are both in the array and add up to equal 9.
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
