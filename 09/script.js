// High Order Functions and Callback 

// function add(a,b, cb){
//     let result = a + b;
//     cb(result);
// }

// add(2,4, function(val){
//     console.log(val);
// });

// add(5,5,(val) => console.log(val));


function add(a,b, cb){
    let result = a + b;
    cb(result);
    return () => console.log(result);
}

let resultFunction = add(4,6,() => {});
resultFunction();
