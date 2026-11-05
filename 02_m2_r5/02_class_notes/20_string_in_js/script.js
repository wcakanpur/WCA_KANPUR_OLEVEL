

let a1 = "this is first line."

console.log(a1)
console.log(a1[0])
console.log(a1[5])
console.log(a1[17])
console.log(a1[18])
console.log(a1[4])
console.log(a1[-16])
console.log(a1[55])

// 1. charAt

console.log(a1.charAt(0))
let temp = a1.charAt(0)
console.log(temp)

// 2. charCodeAt()

console.log(a1.charCodeAt(3))
console.log("Aa".charCodeAt(0))
console.log("Aa".charCodeAt(1))


// 3. at()

console.log(a1.at(0))
console.log(a1.at(-1))
console.log(a1.at(-2))

// 4 . toUpperCase()

console.log(a1.toUpperCase(),a1)

// 5. toLowerCase()

// 6. trmi()

let temp1 = "  text data  "
console.log(temp1,temp1.length)

let temp2 = temp1.trim()
console.log(temp2,temp2.length)
console.log(temp1,temp1.length)

// 7. trimStart() 
// 8. trimEnd()

//  9. replace()


let temp3 = a1.replace("i","e")
console.log(temp3,temp3.length)

// 10. replaceAll()

let temp4 = a1.replaceAll("i","e")
console.log(temp4,temp4.length)


// 11 . includes()
console.log(a1.includes("z"))

// 12 . indexOf())

console.log(a1.indexOf("t"))
console.log(a1.indexOf("m"))

// 13. lastIndexOf()

// 14. concat()

let b1 = "hello"
let b2 = "javascript"

let b3 = b1.concat(b2)
console.log(`b1 : ${b1} b2:${b2} b3 :${b3}`)

b3 = b2.concat(b1)
console.log(`b1 : ${b1} b2:${b2} b3 :${b3}`)

console.log(b1,b2)
console.log(`${b1} ${b2}`)


// 14.padStart()

let temp5 = "5"
console.log(temp5.padStart(3,"0"),temp5)

// 16. padEnd()
let temp6 = "435"
console.log(temp6.padEnd(9,"0"),temp6)

// 17. startsWith()

// let temp8 = a1.startsWith("th")
console.log(a1.startsWith("th"))

// 18. endsWith()

// 19. slice()

let temp9 = a1.slice(5,13)
console.log(temp9)

console.log(a1.slice())
console.log(a1.slice(7))
console.log(a1.slice(-5,-2))
console.log(a1.slice(-5))
console.log(a1.slice(6,1))
console.log(a1.slice(-1,-5))

// 20. substring()

console.log(a1.substring(0,7))
console.log(a1.substring())
console.log(a1.substring(5))
// console.log(a1.substring(-5,-1)) empty string not  support negative indexing

// 21. substr() 

// 22. split()

let temp10 = a1.split(" ")
console.log(temp10,typeof temp10)



let a2 = new String("second string")
console.log(a2)
console.log(a2.length)







