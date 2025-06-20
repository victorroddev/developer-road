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
        i++
    }
    return i;
}

limes = [];