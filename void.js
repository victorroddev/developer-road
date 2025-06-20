//Taking in account how the results change for the parentheses
console.log(void 2 === "2");
console.log(void (2 === "2"));

/* 
This function below have a sintax error
function running(){
    console.log('run');
}();
*/
//Immediately Invoked Function Expressions
//We can also use IIFE to execute a function
//We add void and the logs is 'fun'
void function running(){
    console.log('run');
}();

(function sum(){
    console.log(1 + 2);//returns 3
})();

//Even we can asign the result of an IIFE function to some variable.
//This asign the value of the return, not the function definition
var result = (function mul(){
    var returned = 2 * 2;
    return returned;
}());

console.log(result);
//If we try to use void to asign the result of a function to a variable...
//... we obtain undefined
