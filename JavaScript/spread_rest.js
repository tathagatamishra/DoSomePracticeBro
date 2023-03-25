let x = [1,2,3,4,5]

console.log('X = ', x);


let y = [...x]    // deep sexy copy

console.log('Y = ', y);


console.log(x == y);
console.log(x === y);