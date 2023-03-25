// map higher order

let x = [1,2,3,4,5]

let y = x.map(n => n+2)

console.log('Y = ', y);


for(let i=0; i < x.length; i++) {
    x[i] = x[i] + 2
}

console.log('X = ', x);