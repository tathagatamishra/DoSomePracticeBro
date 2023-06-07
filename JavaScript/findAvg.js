// 3. Find the average of largest and smallest numbers in an unsorted integer array?
// Eg. 
// Input Case 1:  
// input: [1, 4, 3, 2]
// output:  2.5
// solution : average = (1+4)/2 =>5/2 => 2.5

// input: [1, 4, 3, 4]
// output:  3
// solution : average = (1+4 +4)/3 =>9/3 => 3


function findAvg(arr) {
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    let x = 0
    let y = 0

    for(let i=0; i<arr.length; i++) {
        if(arr[i] == max) x++
        if(arr[i] == min) y++
    }

    const average = ((max*x) + (min*y)) / (x+y);
  
    return average;
  }

  console.log(findAvg([1, 4, 3, 2]));