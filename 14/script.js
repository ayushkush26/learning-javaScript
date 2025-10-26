const el = document.getElementById("username");
console.log(el);
el.innerText = "Gagan";

// CSS
// el.classList.add('red-color','underline');

console.log(el.classList);

// el.classList.remove("red-color")

el.style.textDecoration = "underline";
el.style.color = "tomato";

el.parentElement.style.background = "grey";

console.log(el.id);
// el.setAttribute("aria","123")        

//remove elements 

const ele = document.getElementById("username");
el.remove();