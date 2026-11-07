
// 1 arithmetic - > +,-,*,/,%,**,++,--


let a1 = 5;

console.log(a1**2);
console.log(5/2)
console.log(5%2);
console.log(10%2);

let a2 = 5

console.log(`before a2 : ${a2}`)

let result = a2++


console.log(`after a2 : ${a2} result : ${result}`)


a2 = 5

console.log(`before a2 : ${a2}`)

result = a2--


console.log(`after a2 : ${a2} result : ${result}`)


let a3 = 5

console.log(`before a3 : ${a3}`)
result = ++a3

console.log(`after a3 : ${a3} result :${result}`)



let x,y,z;

x=5
y=6

// z = ++x + y

z = x++ + y

console.log(z)
console.log(x)
console.log(y)

// 2. assignment operator -> =,arithmetic=

let a4 = 44

console.log(a4+=1)
console.log(a4-=1)

// 3. comparison operator : >,<,>=,<=,==,!=,===,!== -> boolean

let a5 = 3
let a6 = 7

console.log(a5>a6)
console.log(a5<a6)
console.log(a5>=a6)
console.log(a5<=a6)
console.log(a5==a6)
console.log(a5===a6)

// 4. logical operator : and (&&),or (||) , not (!)

console.log(a5>a6 && a6>a5)
console.log(a5>a6 || a6>a5)
console.log(a5<a6 && a6>a5)
console.log(!a5==a6)

// 5. bitwise operator : and(&),or(|),not(~),xor(^),left shift(<<),right shift(>>)