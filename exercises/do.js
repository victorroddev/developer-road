//Function 
function limesToCut(wedgesNeeded, limes){
    let i = 0;
    let counter = 0;
    while(counter < wedgesNeeded && i < limes.length){
        switch(limes[i]){
            case 'small':
                counter += 6;
                break;
            case 'medium':
                counter += 8;
                break;
            case 'large':
                counter += 10;
                break
        }
        i++;
    }
    return i;
}

limes = ['small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',];

//console.log(limesToCut(42,limes));

function timeToMixJuice(name) {
    let preparationTime = 0;
    switch(name) {
        case 'Pure Strawberry Joy':
            preparationTime = 0.5;
            break;
        case 'Energizer':
        case 'Green Garden':
            preparationTime = 1.5;
            break;
        case 'Tropical Island':
            preparationTime = 3;
            break;
        case 'All or Nothing':
            preparationTime = 5;
            break;
        default:
            preparationTime = 2.5
    }
    return preparationTime;
}

const drinks = [
    'Tropical Island',
    'Energizer',
    'Limetime',
    'All or Nothing',
    'Pure Strawberry Joy',
];

const drinksTwo = [
    'Pure Strawberry Joy',
    'Pure Strawberry Joy',
    'Vitality',
    'Tropical Island',
    'All or Nothing',
    'All or Nothing',
    'All or Nothing',
    'Green Garden',
    'Limetime',
];

const drinksThree = [
    'Energizer',
    'Green Garden',
    'Ruby Glow',
    'Pure Strawberry Joy',
    'Tropical Island',
    'Limetime',
];

const drinksFourth =['Bananas Gone Wild', 'Pure Strawberry Joy'];

function remainingOrders(timeLeft,orders) {
    let i = 0;
    let preparationTiming = 0;
    let restDrinks = [];
    while (i < orders.length && timeLeft > preparationTiming){
        preparationTiming += timeToMixJuice(orders[i]);
        i++;
    }
    restDrinks = orders.splice(i,);
    console.log(restDrinks);
    
}

remainingOrders(7, drinks);
remainingOrders(13,drinksTwo);
remainingOrders(12, drinksThree)
remainingOrders(0.2, drinksFourth);