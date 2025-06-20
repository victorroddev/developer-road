const lander = ['Austria', 'Germany', 'Switzerland'];

console.log(0 in lander); //Return: true
console.log(2 in lander); //Return: true
console.log(5 in lander); //Return: false 
/* We specify number index, not values */

console.log("length" in lander); //Return: true (length is an Array property)

const item = { make: "Brand", model: "Premium", price: 1200 };

function check(toCheck,obj){
    if(toCheck in obj){
        return 'yes';
    }
    return 'no';
}

console.log(check('year',item));