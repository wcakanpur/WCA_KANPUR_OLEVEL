

// conditional statement

// syntax 

// if (condition -> True/False) {

//     block of scope 
// }


// if (true){
//     console.log("if statment")
// }
// console.log("global statement")


// if (false){
//     console.log("if statment")
// }
// console.log("global statement")

// let age = 20
// if (age >= 18){

//     console.log("eligible for vote");
// }
// console.log("global statement")

// let age = 20
// if (age >= 18){

//     console.log("eligible for vote");
// }
// else {
// console.log("you r minor")
// }

// console.log("global statement")


// let num = 4

// if (num == 1){
//     console.log("MON")
// }
// else if(num == 2){
//     console.log("TUE")
// }
// else if(num == 3){
//     console.log("WED")
// }
// else if(num == 4){
//     console.log("THUS")
// }
// else if(num == 5){
//     console.log("FRI")
// }
// else if(num == 6){
//     console.log("SAT")
// }
// else if(num == 7){
//     console.log("SUN")
// }
// else{
//     console.log("number invalid")
// }

// 1. +ve,-ve,zero


// let n1 = 45

// if (n1 > 0){
//     console.log(`${n1} is positive`)

// }

// else if (n1 < 0){
//     console.log(`${n1} is negative`)
// }

// else{
//     console.log(`${n1} is zero`)
// }


// pop up boxes -> alert(),confirm(),prompt()


// alert("message1 from alert box")
// alert("message2 from alert box")
// console.log("message from console.log")

// let user = confirm("are you a robot")
// console.log(user,typeof user)

// prompt("enter you name : ")
// let user1 = Number(prompt("enter your age : "))
// console.log(`user : ${user1} type : ${typeof(user1)}`)

// let user3 = prompt("enter your city : ","kanpur")
// alert(`city : ${user3}`)

// let user4 = confirm("your age is above 18")
// if(user4){
//     alert("eligible for vote")
// }
// else{
//     alert("not eligible for vote")
// }


// let user5 = prompt("char : ")
// console.log(user5,typeof user5)

// if ((user5 =="a") || (user5=="e") || (user5=="i") || (user5=="o") || (user5=="u") ){
//     console.log(`${user5} is vowel`)
// }
// else{
//     console.log(`${user5} is consonant`)
// }


// let n1 = prompt("number 1 : ")
// let n2 = prompt("number 2 : ")
// let n3 = prompt("number 3 : ")
// if ((n1 > n2) && (n1 > n3)){
//     console.log(`greater : ${n1}`)
// }
// else if ((n2 > n1) && (n2 > n3)){
//     console.log(`greater : ${n2}`)
// }
// else if ((n3 > n1) && (n3 > n2)){
//     console.log(`greater : ${n3}`)
// }else{
//     console.log("all are equal")
// }


//  switch case

// syntax : 

// switch (varible/condition/) {
//     case value1:
//         console.log("value1");
//         break;
//     case value2:
//         console.log("value1");
//         break;

//     default:
//         console.log("default message ")
// }

let user1 = 30

switch (user1){

    case 1:
        console.log("mon")
        break;
    case 2:
        console.log("tue")
        break;
    case 3:
        console.log("wed")
        break;
    default:
        console.log("default message")       
}

let user3 = "abc"

switch (user3%2){
    case 0:
        console.log(`${user3} is even`);
        break;
    case 1:
        console.log(`${user3} is odd`);
        break;
    default:
        console.log("invalid")
} 
