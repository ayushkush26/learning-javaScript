// Functions -> Block of code that performs a particular task 

function sayHello() {
    console.log('Hello Ayush');
}

sayHello()                  // we can call function multiple times 


// Parameters

function add(num1,num2) {
    console.log(num1 + num2);
}

add(4,5)


function multiple(num1,num2) {
    // console.log(num1 * num2);   This is a bad Practice the so we use return statement 
    return num1 * num2;
}

let val = multiple(4,4)

console.log('The Multiplication of the two Number is ' + val) // The val result is undefined 


//Unlimited Arguments accept 

// function addNumbers() {
//     console.log(arguments);
// }

// addNumbers(1,2,3,4,5)

function addNumbers() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans += arguments[i];
    }
    return ans;
}

let result = addNumbers(1,2,3,4,5)
console.log(result)

// Spread operator 

function addNumbers(...numbers) {
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        ans += numbers[i];
    }
    return ans;
}

let result1 = addNumbers(1,2,3,4,5)
console.log(result1)