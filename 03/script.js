// Conditional Statements 

//if- else 

    const age = 22 ;

    if (age >= 18) {
        console.log("Yes You can Vote!")
    } else {
        console.log("Cant Vote!")
    }


// if-elseif-else 

    const age1 = 22 ;

    if (age1 >= 18) {
        console.log("Yes You can Vote!")
    } else if (age1<18){
        console.log("Cant Vote!")
    }
    else {
        console.log("Error ")
    }

// Ternary Opreator 

const age2 = 34;

let result = age2 >= 18 ? "Can Vote" : "Can't Vote ";

console.log(result);

// Switch Statement 

const choice = 1 ;

switch (choice) {
    case 1: console.log("Hello");
        break;
    case 2: console.log("Namaste");
        break;
    default: console.log("Invalid Option ")
        break;
}


// we can use 'a' and '+' etc in case 