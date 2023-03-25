// Filter higher order


let x = [1,2,3,4,5]

let y = x.filter(n => n == 3)

console.log('Y = ', y);


let z = []

for(let i=0; i<x.length; i++) {

    if(x[i] == 3)  z.push(x[i])
}

console.log('Z = ', z);