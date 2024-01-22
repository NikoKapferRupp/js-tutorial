let nameArray = [[], []];
let fieldGrid = [[],[],[]];
let rlSync = require('readline-sync');

function tic(){
    console.log("  ______________        ___	    _______");
    console.log(" /	        \\      |   |       /       |");
    console.log(" \\____      ____/      |   |      /     ___|");
    console.log("      |    |           |   |      |    /");
    console.log("      |    |           |   |      |    |");
    console.log("      |    |           |   |      |    \\___");
    console.log("      |    |           |   |      \\        |");
    console.log("      |____|           |___|       \\_______|");
    console.log("");
        
    }
    
function tac(){
    console.log("  ______________        __	    _______");
    console.log(" /	        \\      /  \\        /       |");
    console.log(" \\____      ____/     /    \\      /     ___|");
    console.log("      |    |         /  /\\  \\     |    /");
    console.log("      |    |        /   __   \\    |    |");
    console.log("      |    |       /   /  \\   \\   |    \\___");
    console.log("      |    |      /   /    \\   \\  \\        |");
    console.log("      |____|     /___/      \\___\\  \\_______|");
    console.log("");
};
    
function toe(){
    console.log("  ______________       ____        ________");
    console.log(" /	        \\     /    \\      |        |");
    console.log(" \\____      ____/    /  /\\  \\     |   ,----'");
    console.log("      |    |        /  /  \\  \\    |   |____");
    console.log("      |    |        |  |  |  |    |    ____|");
    console.log("      |    |        \\  \\  /  /    |   |");
    console.log("      |    |         \\  \\/  /     |   '----,");
    console.log("      |____|          \\____/      |________|");
    console.log("");
};

function harryPotter(){
    console.log("Once I make my move, the Queen will take me.\n");
    setTimeout(function(){console.log("Then you’re free")}, 2000);
    setTimeout(function(){console.log("    to check the King.\n")}, 4000);
    setTimeout(function(){console.log("No. Ron, NO!\n")}, 6000);
    setTimeout(function(){console.log("What is it?\n")}, 8000);
    setTimeout(function(){console.log("He’s going to sacrifice himself.\n")}, 10000);
    setTimeout(function(){console.log("No, you can’t,")}, 12000);
    setTimeout(function(){console.log("    there must be another way!\n")}, 14000);
    setTimeout(function(){console.log("Do you want to stop Snape from getting that stone or not?\n")}, 16000);
    setTimeout(function(){console.log("Harry, it’s you that has to go on, ")}, 18000);
    setTimeout(function(){console.log("    I *know* it.\n")}, 20000);
    setTimeout(function(){console.log("Not me,")}, 22000);
    setTimeout(function(){console.log("not Hermione,")}, 24000);
    setTimeout(function(){console.log("YOU.\n")}, 26000);
    setTimeout(function(){console.log("")}, 28000);
    
    
    () => console.log()
}
    
function gridFiller(grid){ 
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            grid[row][col] = " ";
        }
    }
}

function nameQuery(){
    let player1 = rlSync.question("Please enter the name of Player 1: ");
    console.log("\nHello " + player1 + "!\n");
    let player2 = rlSync.question("Please enter the name of Player 2: ");
    console.log("\nHello " + player2 + "!\n");
    
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
    console.log("|6____|7____|8____|\n");
    
};

function markSetter(fieldNum, turnNum) {
    let mark;
    if(turnNum % 2 === 0){
        mark = 'X';
    } else {
        mark = 'O';
    }
    if (fieldNum > 5){
        fieldGrid[2][fieldNum - 6] = mark;
    } else if (fieldNum > 2 && fieldNum < 6){
            fieldGrid[1][fieldNum - 3] = mark;
    } else if (fieldNum < 3){
                fieldGrid[0][fieldNum] = mark;
                }
};

function isFieldNumValid(fieldNum) {
    if (fieldNum < 9 && fieldNum >= 0 ) {
        return true;
    } else {
        console.log("Invalid input!")
        return false;
    }
};

function fieldNumToRowCol (fieldNum) {
    let grid = [];
        if (fieldNum > 5) {
            grid[0] = 2;
            grid[1] = fieldNum - 6;
            return grid;
        } else if (fieldNum > 2 && fieldNum < 6){
            grid[0] = 1;
            grid[1] = fieldNum - 3;
            return grid;
        } else if (fieldNum < 3){
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
        console.log('Invalid input!')
        return false;
    }
};

function numberQuery(turnNum){
    let playerTurnNum = turnNum % 2 === 0 ? 0 : 1;
    if(turnNum % 2 === 0){
        playerTurnNum = 0;
    } else {
        playerTurnNum = 1;
    }
    let fieldNum = Number(rlSync.question(nameArray[playerTurnNum] + "! On which field do you want to put your mark?: "));
    return fieldNum;
};

function tieChecker(turnNum){
    return turnNum === 8;
}

function winningCondition(turnNum){
    let mark;
    let currentPlayerName;
    
    if(turnNum % 2 === 0){
        mark = 'X';
        currentPlayerName = nameArray[0];
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

function endMessage(name, isTied){
    
    if (isTied === false){
        console.log("\nCONGRATULATIONS " + name + "! You won!\n")
    } else {
        console.log("\nGAME IS TIED!\n")
    }
}

function playAgain(){
    let answer = rlSync.question("Do you want to play again? y/n: \n");
    if (answer === 'y'){
        gameStarter();
    } else {
        console.log("Thanks for playing!\n");
    }
    
}

function gameStarter(){
    let turnNum = 0;
    let winnerName;
    let isNumValid = false;
    let validNumber;
    let isTied = false;
    
    nameArray = nameQuery();  // calls nameQuery and puts player names into the nameArray
    if(nameArray[0] === 'SECRET' && nameArray[1] === 'MESSAGE'){
        harryPotter();
    } else {
    gridFiller(fieldGrid); // fills the fieldGrid with a string containing " "
    fieldBuilder(); // prints the game field with fieldGrid values
    
    while( !winnerName && !isTied){
        while(!isNumValid){
            let num = numberQuery(turnNum);
            isNumValid = isFieldNumValid(num);
                if(isNumValid){
                    isNumValid = spaceIsUsed(fieldNumToRowCol(num));
                };
            validNumber = num;
        };
        
        markSetter(validNumber, turnNum);
        winnerName = winningCondition(turnNum);
        isTied = tieChecker(turnNum);
        turnNum++;
        isNumValid = false;
        fieldBuilder();
        
    }
    
    
    endMessage(winnerName, isTied);
    playAgain();
    }
    
    
};
tic();
tac();
toe();

console.log("                      _____");
console.log("                     |START|");
console.log('                      _| |_');
console.log('                      \\   / ');
console.log('                       \\_/ ');
console.log('');

gameStarter();
