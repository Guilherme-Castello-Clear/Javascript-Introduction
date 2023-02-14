/*
    DEFINING SOMA FUNCTION
*/

function soma(x1, x2){ //Functions may be used to create a code that shold be called by his name

    return x1 + x2; //Here, we are returning function result. In this case, it's a math add

}

let result = soma(2, 2);// Saving result of soma function with parameters x1 = 2 and x2 = 2
console.log(result); //Showing result

/*
    CREATING A BASIC CALCULATOR
*/


function calc(x1, x2, op){// Defining function calc with parameters x1 (value 1), x2 (value 2) and op (operation)

    return eval(`${x1} ${op} ${2}`); //Using function eval to "convert" a string to code

}

console.log(calc(2, 2, "-")); //Executing calc function, using "-" as operator.