
console.log("1. creating objects")

console.log("1.1 using {}")

let obj1 = {
    stu1:"student1",
    stu1_age:20,
    stu1_class:12
}

console.log("obj1 :",obj1,"type :",typeof obj1)

console.log("1.2 using constructor Object()")

let obj2 = new Object()

obj2.stu2="student2",
obj2.stu2_age=18,
obj2.stu2_class=11

console.log("obj2 :",obj2,"type :",typeof obj2)


// 2. accessing object data
console.log("2. accessing objects data")

console.log(obj1.stu1,obj1.stu1_age)

console.log(obj2["stu2"],obj2["stu2_age"])

// 3. insert new values
console.log("3. insert new values")
obj1.place = "Delhi"
console.log("obj1 :",obj1,"type :",typeof obj1)

// 4. update value
console.log("4. update values")
obj1.place = "Mumbai"
console.log("obj1 :",obj1,"type :",typeof obj1)

// 5. array as value
console.log("5. array as value")
obj1.sub = ["math","eng","sst","che"]
console.log("obj1 :",obj1,"type :",typeof obj1)

// 6. function as value
console.log("6. function as value")
obj1.test = function (){
    return "test function inside objects"
}
console.log("obj1 :",obj1,"type :",typeof obj1)
let res = obj1.test()
console.log("res : ",res)

// 7. Delete Objects Items
console.log("7. Delete Objects Items")

delete obj1.stu1_class
console.log("obj1 :",obj1,"type :",typeof obj1)
