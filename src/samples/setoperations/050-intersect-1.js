(function() {
    "use strict";

    let numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    let numbersB = [1, 3, 5, 7, 8]; 

    let commonNumbers = new Set(
        numbersA.filter(n => numbersB.indexOf(n) != -1)
    );
    
    console.log("Common numbers shared by both arrays:");
    commonNumbers.forEach(n => console.log(n));
})();