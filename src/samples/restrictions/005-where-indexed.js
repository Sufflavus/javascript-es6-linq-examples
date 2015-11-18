(function() {
    "use strict";
    
    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
    
    let shortDigits = digits.filter((digit, index) => digit.length < index); 
    
    console.log("Short digits:"); 
    shortDigits.forEach(d => console.log(`The word ${d} is shorter than its value.`));
})();
