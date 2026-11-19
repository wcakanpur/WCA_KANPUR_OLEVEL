




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


// function fun4(){

//     let a = 100
//     const b = 200
//     var c = 300

//     console.log(a,b,c)
// }

// fun4()


// console.log(c)


// questions 


let greater = function (a,b){
    if (a>b){
        return a
    }
    else {
        return b
    }
}

let x = Number(prompt("number 1 : "))
let y = Number(prompt("number 2 : "))
let res = greater(x,y)
console.log(res, typeof res)
alert(`between ${x} and ${y} greater is ${res}`)









// function expression

// let a = function () {
// console.log("from function")
// }
// a()
// console.log(a,typeof a)



