(function() {
    "use strict";

    let numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    let numbersB = [1, 3, 5, 7, 8]; 

    let aOnlyNumbers = new Set(
        numbersA.filter(n => numbersB.indexOf(n) === -1)
    );
    
    console.log("Numbers in first array but not second array:");
    aOnlyNumbers.forEach(n => console.log(n));
})();