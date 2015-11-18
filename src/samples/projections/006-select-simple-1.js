(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let numsPlusOne = numbers.map(n => n + 1);

    console.log("Numbers + 1:");
    numsPlusOne.forEach(i => console.log(i));
})();
