let startGame = confirm('Do you want to play a game?');

let minLimit = 1;
let maxLimitValue = 5
let maxLimit = maxLimitValue;
let tryToGess = 3; 
let totalPrize = 0;
let sumPrize = 10;
let currentPrize = sumPrize;   
let defaultPrizeVal = 10;
let nextStep = 5;

if(startGame){
    let condition = true;
    while(condition){  
        let randomNum = number(minLimit, maxLimit);
        while(condition){
            let askUser = +prompt(`
                Enter a number from 1 to ${maxLimit}
                Attempts left: ${tryToGess}
                Total prize: ${totalPrize} $
                Possible prize on current attempt ${currentPrize} $
            `);
            if(askUser === randomNum){
                totalPrize += currentPrize;
                let open = confirm('Congratulation! Your prize is: ' + totalPrize + '$. Do you want to continue?');
                randomNum = number(minLimit, maxLimit); 
                sumPrize *= 3
                currentPrize = sumPrize;
                tryToGess = 3;  
                maxLimit += nextStep;
                if(!open){
                    break;
                }
                continue;                        
            }
            let lowerLimit = 1;
            if(tryToGess === lowerLimit){
               break;
            }
            currentPrize = Math.floor(currentPrize / 2);
            tryToGess --;
        }
        alert('Thank you for a game. Your prize is: ' + totalPrize +'$');
        let tryAgain = confirm('You wants to play again');
        if(tryAgain){
            totalPrize = 0;
            currentPrize = defaultPrizeVal;
            sumPrize = defaultPrizeVal;
            tryToGess = 3;
            maxLimit = maxLimitValue;
            continue;
        }else{
            break;
        }
    }   

}else{
    alert('You did not become a millionaire, but can.');
}

function number(min, max){
    let num = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + num)) + min;
}
