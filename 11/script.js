const students = ["Ayush","Kush","Pranav","Devashish","Apoorv"]

// For-Each

// function print(n){
//     console.log(n);
// }

// students.forEach(print)

students.forEach((val)=> console.log(val))              // it is a why to loop over your array


// Map

students.map((val)=> console.log(val));

// difference map return a return new array but for each does not
const numbers =[1,2,3,4,5,6,7];

numbers.forEach((val)=>console.log(val*2));

const newArr = [];
numbers.forEach((val)=>newArr.push(val*2));
console.log(newArr);

function double(num){
    return num * 2;
}

let newAr = numbers.map(double);
console.log(newAr);



// to find a element in an arrays 
let ans = numbers.find((val) => val === 4)
console.log(ans);

// to find a index of a element in an arrays 
let index = numbers.findIndex((val) => val === 4)
console.log(index);


// includes 
// it return a boolean values 

let bool = numbers.includes(8)
console.log(bool);


// filter 

let fil = numbers.filter((val) => val % 2 == 0)
console.log(fil);


// slice  and splice

let arr1 = numbers.slice(1,5)           
console.log(arr1);


let arr2 = numbers.splice(1,3)     // remove a element in an array but it gives them it in new array 
console.log(arr2);
console.log(numbers)