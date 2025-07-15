

function cookingStatus(int){
    if(int === undefined){
        return 'You forgot to set the timer';
    }else if(int > 0){
        return 'Not done, please wait';
    }{
        return 'Lasagna is done';
    }

}

//console.log(cookingStatus(12));
//console.log(cookingStatus());
//console.log(cookingStatus(0));

layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

function preparationTime(layers, average=2){
    return average * layers.length;

}

//console.log(preparationTime(layers, 3))
//console.log(preparationTime(layers))

function quantities(qtys){
    let noodlesCounter = 0;
    let sauceCounter = 0;
    for(let quantity = 0; quantity <  qtys.length; quantity++){
        if(qtys[quantity] === 'sauce'){
            sauceCounter++;
        }else if(qtys[quantity] === 'noodles'){
            noodlesCounter++;
        }
    }

    let totalNoodles = noodlesCounter * 50;
    let totalSauce = sauceCounter * 0.2;
    
    return {
        noodles: totalNoodles,
        sauce: totalSauce,
    };
};

//console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']))

const friendList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

function addSecretIngredient(friendList, myList){
    myList.push(friendList[friendList.length-1]);
}

//addSecretIngredient(friendList,myList);

//console.log(myList);
const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};
/*
function scaleRecipe(recipe, portions){
    let myRecipe = recipe;
    let { noodles, sauce, mozzarella, meat } = myRecipe;
    return myRecipe = {
        noodles: (noodles / 2) * portions,
        sauce: (sauce / 2) * portions,
        mozzarella: (mozzarella / 2) * portions,
        meat: (meat / 2) * portions,
    }
}
*/

function scaleRecipe(recipe, portions){
    let myRecipe = new Object;
    //let myRecipe = recipe;
    // myRecipe.noodles = (myRecipe.noodles / 2) * portions;
    // myRecipe.sauce = (myRecipe.sauce / 2) * portions;
    // myRecipe.mozzarella = (myRecipe.mozzarella / 2) * portions;
    // myRecipe.meat = (myRecipe.meat / 2) * portions;
    // for(let ingredient in myRecipe){
    //     myRecipe[ingredient] = (myRecipe[ingredient] / 2) * portions;
    // }
    for(let ingredient in recipe){
        myRecipe[ingredient] = (recipe[ingredient] / 2)  * portions;
    }

    return myRecipe;
}  



console.log(scaleRecipe(recipe, 4));
