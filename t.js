const deck = [5,9,7,1,8];

function getFirstCard(deck){
    let [a,b,c,d,e ] = deck;
    console.log(a);
}

getFirstCard(deck)

function getSecondCard(deck){
    let [a,b,c,d,e ] = deck;
    return b;
}

const deckTwo = [10, 7];

function swapTwoCards(deckTwo){
    let [a, b] = deckTwo;
    let returned = [b, a];
    return returned
}

console.log('tercer test :',swapTwoCards(deckTwo));

const threeDeck = [2,6,10];

function shiftThreeCardsAround(threeDeck){
    let [a, b, c] = threeDeck;
    return [b, c, a];
}

console.log('cuarto test: ', shiftThreeCardsAround(threeDeck));