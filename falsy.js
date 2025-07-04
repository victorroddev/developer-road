

function twoSum(array1, array2){
    firstArray = String(array1);
    secondArray = String(array2)

    firstSum = firstArray.replaceAll(",","");
    firstNumber = Number(firstSum);

    secondSum = secondArray.replaceAll(",","");
    secondNumber = Number(secondSum);

    return firstNumber + secondNumber;
}

//console.log(twoSum([1,2,3], [0, 7]));

function luckyNumber(value) {
    string = String(value);
    normal = string.split("").join()
    reversed = string.split("").reverse().join();
    return normal === reversed;
}

//console.log(luckyNumber(1441));
/* version with else if
function errorMessage(input) {
    if(!input){
        return 'Required field';
    }else if(input){
        let toEval = Number(input);
        if(!toEval){
            return 'Must be a number besides 0'
        }
        return ''
    }
}
*/

function errorMessage(input) {
    if(!input){
        return 'Required field';
    }{
        let toEval = Number(input);
        if(!toEval){
            return 'Must be a number besides 0'
    }
        return ''
    }
    
}

console.log(errorMessage('123'))//''
console.log(errorMessage('abc'))//Must be a number
console.log(errorMessage(''))//Required field