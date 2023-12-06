let nameArray = [[""], [""]];
let fieldGrid = [[],[],[]];
let usedSpaces = [[],[],[]];
let rlSync = require('readline-sync');

gameStarter();

function gridFiller(){ 
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            fieldGrid[row][col] = " ";
        }
    }
    console.log("gridFiller done");
};

function nameQuery(){
    let player1 = rlSync.question("Please enter the name of player 1: ");
    let player2 = rlSync.question("Please enter the name of player 2: ");
    return [player1, player2]
}

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

function markSetter(fieldNum, mark){
    if(fieldNum > 5) {
        fieldGrid[2][fieldNum - 6] = mark;
        } else if(fieldNum > 2 && fieldNum < 6){
            fieldGrid[1][fieldNum - 3] = mark;
            } else if(fieldNum < 3){
                fieldGrid[0][fieldNum] = mark;
                }
};

function playerOneMark(){
    let fieldNum = Number(rlSync.question(nameArray[0] + "! On which field do you want to put your mark?: "));
         if(fieldNum > 5 && fieldGrid[2][fieldNum - 6] !== " ") {
            spaceIsUsed()
        } else if(fieldNum > 2 && fieldNum < 6 && fieldGrid[1][fieldNum - 3] !== " "){
            
            } else if(fieldNum < 3 && fieldGrid[0][fieldNum]){
                
                }
        markSetter(fieldNum, "X");
        fieldBuilder();
}

function playerTwoMark(){
    
}

function spaceIsUsed(){
    
}

function winningCondition(){
}

function gameStarter(){
    let turnName;
    let winnerName;
    nameArray = nameQuery();
    gridFiller();
    fieldBuilder();
    while(winnerName === undefined){
        //playerOneMark();
        let fieldNum = Number(rlSync.question(nameArray[0] + "! On which field do you want to put your mark?: "));
        markSetter(fieldNum, "X");
        fieldBuilder();
        fieldNum = Number(rlSync.question(nameArray[1] + "! On which field do you want to put your mark?: "));
        markSetter(fieldNum, "O");
        fieldBuilder();
    }
}