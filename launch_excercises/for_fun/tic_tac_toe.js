let openSpaces = [ " ", " ", " ", " ", " ", " ", " ", " ", " "];
let won = false;
let lost =  true;
let testCounter = 0;
let rlSync = require('readline-sync');


while(won === false || lost === false){
    fieldBuilder();
    testCounter++;
    if (testCounter === 5) {
        won = true;
    }
    let fieldNum = rlSync.question("On which field do you want to put your mark?: ");
    openSpaces[fieldNum] = "X";
    
    won = winningCondition(openSpaces);
   
}

function winningCondition(spaces) {
    let testArray = [ "X", "X", "X", " ", " ", " ", " ", " ", " "];
    console
    
    if(spaces === testArray) {
        return true;
    } else {
        return false
    }
}


function fieldBuilder() {
    console.log("___________________");
    console.log("|     |     |     |");
    console.log("|  " + openSpaces[0] + "  |  " + openSpaces[1] + "  |  " + openSpaces[2] + "  |");
    console.log("|0____|1____|2____|");
    
    console.log("|     |     |     |");
    console.log("|  " + openSpaces[3] + "  |  " + openSpaces[4] + "  |  " + openSpaces[5] + "  |");
    console.log("|3____|4____|5____|");
    
    console.log("|     |     |     |");
    console.log("|  " + openSpaces[6] + "  |  " + openSpaces[7] + "  |  " + openSpaces[8] + "  |");
    console.log("|6____|7____|8____|");
    

    
    
    /*if (openSpaces[0] === 0, openSpaces[1] === 1, openSpaces[2] === 2) {
        console.log("___________________\n|     |     |     |\n|     |     |     |\n|1____|2____|3____|")
    } else if (openSpaces[0] === 0, openSpaces[1] === 1, openSpaces[2] !== 2) {
        if(openSpaces[]) {
            console.log();
        }
        
        
    } else if (openSpaces[0] === 0, openSpaces[1] !== 1, openSpaces[2] !== 2) {
        
    } else if (openSpaces[0] !== 0, openSpaces[1] !== 1, openSpaces[2] !== 2) {
        
    } else if (openSpaces[0] !== 0, openSpaces[1] !== 1, openSpaces[2] === 2) {
        
    } else if (openSpaces[0] !== 0, openSpaces[1] === 1, openSpaces[2] === 2) {
        
    } else if (openSpaces[0] === 0, openSpaces[1] !== 1, openSpaces[2] === 2) {
        
    } else if (openSpaces[0] !== 0, openSpaces[1] === 1, openSpaces[2] !== 2) {
        
    }
        

fieldBuilder(); */
};
fieldBuilder();
openSpaces[0] = 'X';
fieldBuilder();