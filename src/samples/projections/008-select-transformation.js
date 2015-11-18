(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    let strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    let textNums = numbers.map(n => strings[n]);

    console.log("Number strings:");
    textNums.forEach(s => console.log(s));
})();
