// Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
// Ex:
// Input Case 1:  
// input: [2,2,2,2,2] 
// output:  5
// solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
// it contain five 2 element

// Input Case 2:  
// input: [ 1,3,2,4,5]  
// output:  1
// solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
// it contain one 3 element




function findCount(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    x = x + arr[i];
  }

  let y = x / arr.length;

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    if (y == arr[i]) {
      ans++;
    }
  }

  return ans;
}

console.log(findCount([1, 3, 2, 4, 5]));

// ans = 1