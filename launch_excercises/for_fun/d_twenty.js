function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
};

function diceTester(diceNum, amountDice = 1, testAmount = 500) {
    let array = Array(diceNum * amountDice + 1);
    
    for (let i = 0; i < array.length; i++) {
       array[i] = 0;
    };
    
    for (let i = 0; i < testAmount; i++) {
        let randomNum = 0;
        for (let j = 0; j < amountDice; j++) {
            randomNum += getRandomInt(diceNum);
        }
        let randomNumSum = randomNum;
        array[randomNumSum]+=1;
    };
    let iterator = array.entries();
    
    for (let element of iterator) {
    console.log(element);
    };
    
    let graphArray = Array(array.length);
    
    for (let i = 0; i < graphArray.length; i++) {
        graphArray[i] = ' ';
    };
    
    for (let element in array) {
        for (let i = 0; i < array[element]; i++) {
            
            graphArray[element] += "-"
        }
    }
    
    /*let graphIterator = graphArray.entries();
    for (let element of graphIterator) {
    console.log(element);
    };*/
    /*function niceGraph(array) {
        
        for (let i = 1; i < array.length; i++) {
            if () {
                
            }
        }
        
    }*/
    
    for (let element in graphArray) {
        let extraSpace = ' '
        if(element > 9) {
            extraSpace = '';
        }
        console.log(element + ": " + extraSpace + array[element] + " "+ graphArray[element] + "|");
        
    }
};


function manyDiceTester(diceNum, amountDice, testRuns) {
    let manyDice = 0;
    let singleDice = 0;
    
    for (let i = 0; i < testRuns; i++) {
        manyDice += (getRandomInt(diceNum) * amountDice);
        singleDice += getRandomInt(diceNum * amountDice);
    }
    return ((manyDice / testRuns) - (singleDice / testRuns));
}

function ddtAverage(diceNum, amountDice, testRuns) {
    let average = 0;
    for(let i = 0; i < testRuns; i++) {
        average += manyDiceTester(diceNum, amountDice, testRuns);
    }
    console.log("\nNach " + testRuns * testRuns + " Würfelwürfen beträgt die durchschnittliche Differenz zwischen "+ amountDice + " " + diceNum + "er Würfel und einem " + (diceNum * amountDice) + "er Würfel " + (average / testRuns) + ".\n");
}

ddtAverage(2, 10, 1000);

diceTester(4, 5, 500)
