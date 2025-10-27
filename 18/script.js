//Synchronous Tasks and Asynchronous Tasks

let a = 23;
let b = 45;
const sum = a + b ;
// console.log(sum);               


// let resultFromServer = fetch(                                   // It does not stop the execution but give a promise 
//     "https://jsonplaceholder.typicode.com/posts"
// );
// console.log(resultFromServer);


let resultFromServer = await fetch(                                 // Uncaught SyntaxError: await is only valid in async functions, async generators and modules
    "https://jsonplaceholder.typicode.com/posts"
);
console.log(resultFromServer);


async function getData() {                                              // await keyword
    let resultFromServer = await fetch(                              
    "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(await resultFromServer.json());
}

getData();
console.log(sum);   


// Second method to get the Same result 

fetch("https://jsonplaceholder.typicode.com/posts")                    
.then((data)=>{
    console.log(data.json())
})
.catch((error)=>{
    console.log(error)
})
