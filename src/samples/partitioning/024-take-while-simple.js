(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let firstNumbersLessThan6 = numbers.slice(0, ((array, condition) => {
        var stopIndex = array.length;
        array.some((n, index) => condition(n, index) ? false : ((stopIndex = index), true));
        return stopIndex;
    })(numbers, n => n < 6));

    console.log("First numbers less than 6:"); 
    firstNumbersLessThan6.forEach(n => console.log(n));
})();
