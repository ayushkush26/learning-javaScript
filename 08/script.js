// Arrow functions 

// 1 Syntax
const sayHello =() =>{
    console.log('hello');
};

sayHello()


const add =(a,b) =>{
    return a + b ;
};

let val = add(5,5)
console.log(val);


//Or 

const addV2 = (a,b) => a + b;   //One liner
console.log(addV2(2,2));

// 2 'arguments keywords

// const addNumbers = () => {            ReferenceError: Can't find variable: arguments
//     console.log(arguments);
// }

// addNumbers(1,2,3,4,5)


const addNumbers = (...numbers) =>{
    console.log(numbers);
}

addNumbers(1,2,3,4,5)


//3 Hoisting 

sayHello1()

function sayHello1() {
    console.log('Hello')
}



const sayHello2 = () => {               // No hoisting possible
    console.log('Hello')
}
sayHello2()


// 4 This Keyword 

const obj = {
    value : 20,
    myFunction : function () {
        console.log("Values is " + this.value)
    }
}

obj.myFunction()


const obj1 = {                                  // it point to the global object window 
    value : 20,
    myFunction :  () => {
        console.log(this.value)
    }
}

obj1.myFunction()