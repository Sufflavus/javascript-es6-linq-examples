(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
     
    let lowNums = numbers.filter(n => n < 5).map(n => digits[n]);

    console.log("Numbers < 5:");
    lowNums.forEach(item => console.log(item));
})();
