// Query Selector

/* 
- tag Name 
- id #
- class .
*/

// const body = document.querySelector("body");
// body.innerHTML = "<h1>You have been Hacked!</h1>";
// console.log(body.innerHTML); 

// const div = document.querySelector("div");
// div.innerHTML = "<h1>You have been Hacked!</h1>";
// console.log(body.innerHTML);

// const code = document.querySelector("code");
// code.innerHTML = 'alert("HELLO")';
// console.log(body.innerHTML);
// code.innerText = alert("HELLO");



// By ID #

const username = document.querySelector("#username");
console.log(username.innerText);

username.innerText = "<h1>Gagan</h1>"
username.innerHTML = "<h1>Gagan</h1>"


const p = document.querySelector(".block")
console.log(p)

const ele = document.querySelector("div")
console.log(ele.children)
console.log(ele.parentElement.children)

const el = document.querySelectorAll(".block")
el.forEach((e) => {
    console.log(e.innerHTML)
}) 





