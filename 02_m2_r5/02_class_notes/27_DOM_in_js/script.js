

// 1 how to select elm in js


// 1. using getElementById

// console.log(document.getElementById("div1"))


// let div = document.getElementById("div1")
// console.log(div,typeof div)
// console.log(div.textContent)
// div.style.color="red"
// div.style.backgroundColor="black"

// 1.2 using getElementByClassName

// let div = document.getElementsByClassName("para")
// console.log(div)

// console.log(Array.from(div))

// let array_div = Array.from(div)
// console.log("array_div :",array_div,typeof array_div)

// console.log(array_div[1])


// for(let i = 0 ; i < array_div.length ; i++){
//     console.log(array_div[i])
//     array_div[i].style.color="green";
//     array_div[i].textContent="new text from js"
// }

// for (let i of array_div){
//     console.log(i)
// }



// let p = document.getElementsByClassName('para')
// console.log(p,typeof p)

// 1.3 using getElemetByTagName

// let div = document.getElementsByTagName("body")
// console.log(div)

// 1.4 using query selector 

// let div = document.querySelector("#head1")
// console.log(div)
// div.textContent="new text from js"

// 1.5 query selector all

// let div = document.querySelectorAll(".para")
// console.log(div)
 









// 2. how to extract data from selected elements


// 2.1 text data


// let h1 = document.querySelector("#head1")
// console.log("h1 : ",h1)

// let data ;

// // a using textcontent
// data = h1.textContent
// console.log(data,typeof data , data.length)

// // b using innerText
// data = h1.innerText
// console.log(data , typeof data , data.length)

// // c using innerHTML

// let div = document.querySelector("#div1")
// console.log(div)

// data = div.innerHTML
// console.log(data,typeof data, data.length)



// 2.2 attribute data



let p = document.querySelector(".para")
console.log(p)

// attributes

let data = p.attributes
console.log(data,typeof data , data.length)

// getAttribute

data = p.getAttribute("class")

console.log(data,typeof data, data.length)

// setAttribute

p.setAttribute("id","new-id-from-js")

console.log(p.getAttribute("id"))
console.log(p.attributes)