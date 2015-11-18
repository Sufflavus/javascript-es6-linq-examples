(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    let strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    let digitOddEvens = numbers.map(n => {
        return { 
            digit: strings[n], 
            even: (n % 2 === 0) 
        };
    });

    digitOddEvens.forEach(d => console.log(`The digit ${d.digit} is ${d.even ? "even" : "odd"}`));
})();
