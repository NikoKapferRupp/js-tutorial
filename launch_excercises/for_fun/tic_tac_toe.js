let nameArray = [[""], [""]];
let fieldGrid = [[],[],[]];
let rlSync = require('readline-sync');

function gridFiller(grid){ 
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            grid[row][col] = " ";
        }
    }
}

function nameQuery(){
    let player1 = rlSync.question("Please enter the name of player 1: ");
    let player2 = rlSync.question("Please enter the name of player 2: ");
    return [player1.toUpperCase(), player2.toUpperCase()]
};

function fieldBuilder(){
    console.log("\nPlayer 1: " + nameArray[0] + "       vs      " + nameArray[1] + " :Player 2")
    
    console.log("___________________");
    console.log("|     |     |     |");
    console.log("|  " + fieldGrid[0][0] + "  |  " + fieldGrid[0][1] + "  |  " + fieldGrid[0][2] + "  |");
    console.log("|0____|1____|2____|");
    
    console.log("|     |     |     |");
    console.log("|  " + fieldGrid[1][0] + "  |  " + fieldGrid[1][1] + "  |  " + fieldGrid[1][2] + "  |");
    console.log("|3____|4____|5____|");
    
    console.log("|     |     |     |");
    console.log("|  " + fieldGrid[2][0] + "  |  " + fieldGrid[2][1] + "  |  " + fieldGrid[2][2] + "  |");
    console.log("|6____|7____|8____|");
    
};

function markSetter(fieldNum, turnNum){
    let mark;
    if(turnNum % 2 === 0){
        mark = 'X';
    } else {
        mark = 'O';
    }
    if(fieldNum > 5){
        fieldGrid[2][fieldNum - 6] = mark;
        } else if(fieldNum > 2 && fieldNum < 6){
            fieldGrid[1][fieldNum - 3] = mark;
            } else if(fieldNum < 3){
                fieldGrid[0][fieldNum] = mark;
                }
};

function isFieldNumValid(fieldNum) {
    console.log(typeof fieldNum);
    if(fieldNum < 9 && fieldNum >= 0 ) {
        return true;
    } else {
        return false;
    }
};

function fieldNumToRowCol(fieldNum) {
    let grid = [];
        if(fieldNum > 5) {
            console.log(grid);
            grid[0] = 2;
            grid[1] = fieldNum - 6;
            return grid;
        } else if(fieldNum > 2 && fieldNum < 6){
            grid[0] = 1;
            grid[1] = fieldNum - 3;
            return grid;
            } else if(fieldNum < 3){
                grid[0] = 0;
                grid[1] = fieldNum;
                return grid;
            } else { console.log("error"); }

};

function spaceIsUsed(grid){
    let row = grid[0];
    let col = grid[1];
    if(fieldGrid[row][col] === " "){
        return true;
    } else {
        return false;
    }
};

function numberQuery(turnNum){
    let playerTurnNum;
    if(turnNum % 2 === 0){
        playerTurnNum = 0;
    } else {
        playerTurnNum = 1;
    }
    let fieldNum = Number(rlSync.question(nameArray[playerTurnNum] + "! On which field do you want to put your mark?: "));
    return fieldNum;
};

function winningCondition(turnNum){
    let mark;
    let currentPlayerName;
    
    if(turnNum % 2 === 0){
        mark = 'X';
        currentPlayerName = nameArray[0];
        console.log('nameArray: ' + nameArray);
    console.log('playerName: ' + currentPlayerName);
    }else{
        mark = 'O';
        currentPlayerName = nameArray[1];
    }
    for(let i = 0; i < 3; i++) {
        if(fieldGrid[i][0] === mark && fieldGrid[i][1] === mark && fieldGrid[i][2] === mark){
            return currentPlayerName;
        } 
    }
    for(let i = 0; i < 3; i++) {
        if(fieldGrid[0][i] === mark && fieldGrid[1][i] === mark && fieldGrid[2][i] === mark){
            return currentPlayerName;
        } 
    }
    if(fieldGrid[0][0] === mark && fieldGrid[1][1] === mark && fieldGrid[2][2] === mark){
        return currentPlayerName;
    }else if(fieldGrid[0][2] === mark && fieldGrid[1][1] === mark && fieldGrid[2][0] === mark){
        return currentPlayerName;
    } else {
        return undefined;
    }
    
};

function winMessage(name){
    console.log("\nCONGRATULATIONS " + name + "! You won!\n");
}

function gameStarter(){
    let turnNum = 0;
    let winnerName;
    let isNumValid = false;
    let validNumber;
    
    nameArray = nameQuery();  // calls nameQuery and puts player names into the nameArray
    gridFiller(fieldGrid); // fills the fieldGrid with a string containing " "
    fieldBuilder(); // prints the game field with fieldGrid values
    while(winnerName === undefined){
        while(isNumValid === false){
            let num = numberQuery(turnNum);
            isNumValid = isFieldNumValid(num);
                if(isNumValid === true){
                    isNumValid = spaceIsUsed(fieldNumToRowCol(num));
                };
            validNumber = num;
        };
        
        markSetter(validNumber, turnNum);
        winnerName = winningCondition(turnNum);
        turnNum++;
        isNumValid = false;
        fieldBuilder();
        
    }
    winMessage(winnerName);
    
    
};

gameStarter();