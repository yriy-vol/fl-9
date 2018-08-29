function userCard(number){
    let key = number;
    let credits = 100; 
    let transactionLimit = 100;
    let historyLogs = [];
    return{
        getCardOptions: function(){
            return{
                'key': key, 
                'balance': credits,
                'transactionLimit': transactionLimit,
                'historyLogs': historyLogs
            }  
        },
        putCredits: function(creditAmount){
            credits += creditAmount;
            historyLogs.push({
                operationType: 'Recived credits',
                credits: creditAmount,
                operationTime: date()
            });
        },
        takeCredits: function(creditAmount){
            if(creditAmount > credits || creditAmount > transactionLimit){
                console.log('There is not enough money to withdraw');
            }
            credits -= creditAmount; 
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: creditAmount,
                operationTime: date()
            });
        },
        setTransactionLimit: function(creditsLimit){
            let minimumLimit = 0;
            if(creditsLimit < minimumLimit){
                console.log('The limit can not be less 0');
            }
            transactionLimit = creditsLimit;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: creditsLimit,
                operationTime: date()
            });
        },
        transferCredits: function(creditAmount, recipientCard){
            let taxRate = 0.5;
            let maxPercent = 100;
            let tax = creditAmount * taxRate / maxPercent;
            if(tax + creditAmount > credits || creditAmount > transactionLimit){
                console.log('Not enough money for the operation')
            }
            credits = credits-(creditAmount + tax);
            recipientCard.putCredits(creditAmount);
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: creditAmount + tax,
                operationTime: date()
            });
        }
    }
}

class UserAccount{
    constructor(name){
        this.name = name;
        this.card = [];
    }
    addCard(){
        UserAccount.count += 1;
        if (UserAccount.count > UserAccount.limitUserCard){
           return console.log('Card limit exceeded');
        }
        this.card.push(userCard(UserAccount.count))
    }
    getCardByKey(key){
        return this.card[key-1]
    }
}
UserAccount.limitUserCard = 3;
UserAccount.count = 0;

function date(){
    let myDate = new Date();
    let month = myDate.getMonth()+1;
    let october, value = 10;
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();
    if(month < october){
        month = '0' + month;
    }
    if(hours < value){
        hours = '0' + hours;
    }
    if(minutes < value){
        minutes = '0' + minutes;
    }
    if(seconds < value){
        seconds = '0' + seconds;
    }
    let date = `${myDate.getDate()}/${month}/${myDate.getFullYear()}`;
    let time = `${hours}:${minutes}:${seconds}`;
    return `${date}, ${time}`
}