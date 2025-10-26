// DOM selector by class

// it return multiple elements 

const elements = document.getElementsByClassName("block")
console.log(elements);

// for (let i = 0; i < elements.length; i++) {
//     console.log(elements.item(i))  
// }

// for (let i = 0; i < elements.length; i++) {
//     elements.item(i).style.background = "blue";  
// }

// remove a particular 

const ele = document.getElementsByClassName("best")

for (let i = 0; i < ele.length; i++) {
    console.log(ele.item(i))  
}

while (ele.length > 0) {
    ele[0].remove();
}

// console.log(ele.length)
// for (let i = 0; i < ele.length; i++) {
//     ele[i].remove();
// }

console.log("-------------------------------")
for (let i = 0; i < ele.length; i++) {
    console.log(ele.item(i))  
}
