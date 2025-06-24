object = {"Amil Pastorius": 99373, "Jesse Johnson": 1337, "Min-seo Shin": 0}

function addPlayer(scoreBoard, player, score) {
    scoreBoard.player = score;
    return updatedScoreBoard;
}

function updateScore(scoreBoard, player, points){
    if(!player in scoreBoard){
        return scoreBoard
    }
    delete scoreBoard.player;
    return scoreBoard
}



function removePlayer(scoreBoard,player){
    if(player in scoreBoard){
        updatedScoreBoard = delete scoreBoard[player];
        console.log('esta');
        return scoreBoard;
    } 
    console.log('no esta');
    return scoreBoard;
    
}

function updateScore(scoreBoard, player, points) {
    scoreBoard[player] = scoreBoard[player] + points;
    return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
    for(let player in scoreBoard){
        scoreBoard[player] = scoreBoard[player] + 100;
    }
    return scoreBoard;
}

console.log(applyMondayBonus(object));