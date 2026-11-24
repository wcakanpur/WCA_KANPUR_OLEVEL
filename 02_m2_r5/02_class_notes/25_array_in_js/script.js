

// 1. creating array
// let arr1 = [10,20,30,"text data",true,34.78]
// console.log("arr1 : ",arr1)
// arr1 = []
// console.log("arr1 : ",arr1)

// arr1 = [10]
// console.log("arr1 : ",arr1)

// let arr2 = new Array(10,20,30,40)
// console.log("arr2 : ",arr2)


// let arr3 = Array.of(10,20,30,"text data")
// console.log("arr3 : ",arr3)


// let arr4 = Array.from("hello javascript")
// console.log("arr4 : ",arr4)


// 2. access items of array

// let arr1 = ["one","two","three","four"]

// console.log(arr1[0])
// console.log(arr1[3])

// console.log(arr1.at(0))
// console.log(arr1.at(-1))

// console.log(arr1.length)
// console.log(arr1[arr1.length -1])

// 3. traversal

// for(let i = 0;i<arr1.length;i++){
//     console.log(i,arr1[i])
// }

// let i = 0

// while(i<arr1.length){

//     console.log(i,arr1[i])
//     i++;
// }

// for(let i of arr1){
//   console.log(i)
// }


// for each loop

// let arr1 = ["one","two","three","four"]
// arr1.forEach(
//     (i) => {
// console.log(i,i.length)
//     }
// )


//  4. adding new items to array

// let arr1 = ["html","Css","Javascript"]
// console.log("arr1",arr1,arr1.length,typeof arr1)

// // 4.1 push()

// arr1.push("new items (push)") // always add values at end of array

// let temp = arr1.push("temp value 1")
// console.log("temp : ",temp)

// console.log("arr1",arr1,arr1.length,typeof arr1)

// // 4.2 unshift()

// arr1.unshift("new item (unshift)") // add values at starting of array
// console.log("arr1",arr1,arr1.length,typeof arr1)










// 4.3 splice() -> change the original array
// arr1.splice(0,0,"new value (splice)")
// console.log("arr1",arr1,arr1.length,typeof arr1)










// //  4.4 concat 

// let a1 = [1,2,3,4]
// let a2 = [10,20,30,40]

// temp = a1.concat(a2)

// console.log(`a1:${a1} a2:${a2} temp:${temp}`)







// 5. Removing items from array

// let arr1 = ["HTML", "CSS", "JavaScript", "Python", "Java"];
// console.log("arr1", arr1, arr1.length, typeof arr1);










// 5.1 pop()

// arr1.pop(); // removes the last item from array

// let temp = arr1.pop();
// console.log("temp (pop): ", temp);

// console.log("arr1", arr1, arr1.length, typeof arr1);







// 5.2 shift()

// arr1.shift();

// temp = arr1.shift();
// console.log("temp (shift): ", temp);

// console.log("arr1", arr1, arr1.length, typeof arr1);








// 5.3 splice()

// arr1.splice(1, 1);

// console.log("arr1", arr1, arr1.length, typeof arr1);





// 5.4 slice() -> didn't change the original array

// let a3 = [10, 20, 30, 40, 50];

// temp = a3.slice(0, 3);

// console.log(`a3: ${a3} temp: ${temp}`);


// let n = 10;

// for (let i = 1; i <= n; i++) {
// console.log(i);
// }


let fun1 = function(user_num){
    let arr1 = []
    for (let i = 1 ; i <= user_num ; i++){
        arr1.push(i)
    }
    return arr1
}

let user = Number(prompt("enter a number : "))
let res = fun1(user)
console.log("res : ",res)
document.write(res)