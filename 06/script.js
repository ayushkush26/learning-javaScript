// Loops

// For loop    

for (let i = 0; i < 10; i++) {
    console.log("Ayush" + i);
}

// While loop

// let ip = 0
// let house = 100

// while (ip != house) {
//     ip = ip + 1;
//     console.log('Step Taken' + ip) 
// }



// do-while

// let ip = 0
// let house = 100

// do{
//     ip = ip + 1;
//     console.log('Step Taken' + ip)
// }while (ip <= house);


 // Guess the input

 let number = 40;
 let guess = 0;

//  do{
//     guess = parseInt(prompt("Guess a Number "))
//     if (guess == number) {
//         alert('Winner');
//         break;
//     }
//  }while (guess != 0)


while (guess != 0){
    guess = parseInt(prompt("Guess a Number "))
    if (guess == number) {
        alert('Winner');
        break;
    }
}