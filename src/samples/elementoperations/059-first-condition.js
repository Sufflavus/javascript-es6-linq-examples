(function() {
    "use strict";

    let strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
 
    let startsWithO = strings.filter(s => s[0] === "o")[0]; 
    
    console.log(`A string starting with 'o': ${startsWithO}`);
})();