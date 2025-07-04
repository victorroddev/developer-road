

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

function errorMessage(input) {
    eval = Number(input);
    if(isNaN(eval)){
        return 'Must be a number';
    }else if(eval instanceof Number){
        return 'if works';
    }else if(!eval){
        return 'required field'
    }
}

console.log(errorMessage('abc'))
