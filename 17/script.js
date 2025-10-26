const button = document.getElementById("clickButton");
const container = document.getElementById("my-container");
let count = 1;
button.addEventListener("click",()=>{
    const el = document.createElement('h1');
    el.innerText = count;
    container.appendChild(el);
    count++;
})
