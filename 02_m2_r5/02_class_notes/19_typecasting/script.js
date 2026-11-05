
let a1 = "45"
console.log(a1,typeof a1)

let a2 = Number(a1)
console.log(a2,typeof a2)
// console.log(a1,typeof a1)

a1 = Number(a1)
console.log(a1,typeof a1)

let a3 = "45abc"
let a4 = Number(a3)
console.log(a4,typeof a4)

let a5 = false
let a6 = Number(a5)
console.log(a6,typeof a6)

let a7 = 3
let a8 = Boolean(a7)
console.log(a8,typeof a8)




// parseInt, parseFloat

let a9 = "22.45px"
console.log(a9,Number(a9),typeof(Number(a9)))

console.log(a9,parseFloat(a9) , typeof(parseFloat(a9)))

// ------------  explicit type casting ------------



let a10 = "45"
let a11 = 5

console.log(a10 + a11)

// -------- implicit typecasting ----------










