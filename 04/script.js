// Logical Operators
//AND->All Cond,must be true(&&)

const age = 22 ;
// const gender = 'Male'
const gender = 'Female'

if (age >= 18 && gender == 'Male') {
    console.log('You are a Adult Male');
}

//OR->Atleast one cond should be true

if (age >= 18 || gender == 'Male') {
    console.log('You are a Adult Male');
}

//NOT->! true becomes false and false becomes true
const number = 5;

if (number % 2 != 0){
console.log('odd');
}




