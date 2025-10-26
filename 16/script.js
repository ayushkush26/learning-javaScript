// Events Listeners 

// function handleButtonClick() {
//     console.log("That Button is Clicked");
//     alert("Hey i am Clicked");
// }

// const ele = document.getElementById("clickButton");
// ele.onclick = () => {
//     console.log("Hey I am click");
// };

// OverWrite the Above  

// const el = document.getElementById("clickButton");
// el.onclick = () => {
//     console.log("You have Been Hacked");
// };

// The Best Method to Use 

// const el = document.getElementById("clickButton");
// function doSomething() {
//     console.log('Button Clicked!');
// }

// el.addEventListener("click",doSomething);

// Assignment 

const el = document.getElementById("clickButton");
const nameBlock = document.getElementById("changeColor");
el.addEventListener("click", ()=>{
    if (nameBlock.style.color === "red") {
        nameBlock.style.color = "blue";
    }
    else{
        nameBlock.style.color = "red";
    }
            
})

const allChildrens = document.querySelector("body").children;
console.log(allChildrens);
for (let i = 0; i < allChildrens.length; i++) {
    allChildrens[i].addEventListener("click",()=> {
        allChildrens[i].remove();
    })
    
}


