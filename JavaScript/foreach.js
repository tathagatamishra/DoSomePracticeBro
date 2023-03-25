// for each

let x = [1,2,3,4,5]


function sum(a) {
    return console.log(a+2)
}

x.forEach(n => sum(n))


let y = x.map(n => n+2)

console.log(y);