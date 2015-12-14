(function() {
    "use strict";
    
    const startBalance = 100.0;

    let attemptedWithdrawals = [20, 10, 40, 50, 10, 70, 30];
    
    let endBalance = attemptedWithdrawals.reduce((balance, nextWithdrawal) => 
        nextWithdrawal <= balance ? (balance - nextWithdrawal) : balance, startBalance); 

    console.log(`Ending balance: ${endBalance}`);
})();