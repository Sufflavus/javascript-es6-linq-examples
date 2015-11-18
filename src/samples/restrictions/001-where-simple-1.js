(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let lowNums = numbers.filter(n => n < 5);

    console.log("Numbers < 5:"); 
    lowNums.forEach(x => console.log(x));
})();
