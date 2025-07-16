
//Example of using test() method
const regex = /ch/;

const texty = 'El chapulin colorado';
const textyTwo = 'No contaban con mi astucia';

console.log(regex.test(texty)) // Output: true
console.log(regex.test(textyTwo)) // Output: false

//Example of using exec() method
const aString = 'value to find a match, for text exec method';

console.log(regex.exec(aString)) //Output: ['ch', index: 19, input: 'value to find a match, for text exec method',groups: undefined]

//In Strings

//Example of using match() metod
const nameP = 'Frenkie De Jong';
const rg = /[A-Z]/g;

console.log(nameP.match(rg));// Output: ['F', 'D', 'J']

//Using matchAll() method

const texto = "hallo ich bin Mario, hallo loite, lets ghets";
const drgx = /hallo (\w+)/g;

const found = texto.matchAll(drgx);

for(item of found){
    console.log(item);
}

//We should iterate on the return value or expresion.


