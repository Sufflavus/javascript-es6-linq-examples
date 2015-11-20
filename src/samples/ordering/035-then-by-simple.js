(function() {
    "use strict";

    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let sortedDigits = digits.slice().sort((d1, d2) => {
        if (d1.length > d2.length) {
            return 1;
        } 
        if (d1.length < d2.length) { 
            return -1;
        }

        if (d1 > d2) { 
            return 1;
        } 
        if (d1 < d2) {
            return -1
        } 
        return 0;
    });

    console.log("Sorted digits:");
    sortedDigits.forEach(d => console.log(d));
})();
