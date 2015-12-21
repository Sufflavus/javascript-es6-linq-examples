(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let lowNumbers = () => numbers.filter(n => n <= 3);

    console.log("First run numbers <= 3:")
    lowNumbers().forEach(n => console.log(n));

    for (var i = 0; i < 10; i++) { 
        numbers[i] = -numbers[i]; 
    } 
    
    console.log("Second run numbers <= 3:"); 
    lowNumbers().forEach(n => console.log(n));
})();