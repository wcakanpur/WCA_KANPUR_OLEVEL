




// function function_name (parameter/optional){

//     block of scope
// } 

// function_name()

// function fun1(){
//     console.log("1")
//     console.log("2")
//     console.log("3")
//     console.log("4")
//     console.log("5")
// }
// fun1()

// let a = fun1()
// let a = fun1
// console.log(a,typeof a)

// fun with parameters and no return

// function fun2(a,b){
//     let c = a+b
//     console.log(c)
// }

// fun2(10,5)
// fun2(10,5,20)
// fun2(10)
// fun2(10,"5")
// fun2("hello","javascript")


// fun without parameter and with return

// function fun3(){
//    console.log("console fun3")
//    return "from function 3"
// }

// fun3()
// let result = fun3()
// console.log(result,typeof result)





// fun with parameter and with return

// let add = function (a,b){
//     let c = a+b
//     return c
// }
// let res = add(44,78)
// console.log(res,typeof res)

// let x = 10
// let y = 20

// res = add(x,y)
// console.log(res)


// scoping 







// {} -> scope 






// function fun1(){
// let a = 10
// const b = 20
// var c = 30

// }

// fun1()
// console.log(c)


// nested fun


// function one(){
//     let a = "function one varible"

//     function two(){
//         let b = "function two variable"

//     }

//         console.log(a)
//         // console.log(b) error
//     two()
// }

// one()




// arrow function

let fun1 = function (a,b=9){
    console.log("fun1")
    console.log(a*10,b*10)
}

fun1(2)

let fun2 = (a,b) => {

    console.log("fun2")
    console.log(a*10,b*10)
}

fun2(3,5)





// questions 


// let greater = function (a,b){
//     if (a>b){
//         return a
//     }
//     else {
//         return b
//     }
// }

// let x = Number(prompt("number 1 : "))
// let y = Number(prompt("number 2 : "))
// let res = greater(x,y)
// console.log(res, typeof res)
// alert(`between ${x} and ${y} greater is ${res}`)









// function expression

// let a = function () {
// console.log("from function")
// }
// a()
// console.log(a,typeof a)



