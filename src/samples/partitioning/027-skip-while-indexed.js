(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let laterNumbers = numbers.slice(((array, condition) => {
        var stopIndex = array.length;
        array.some((n, index) => condition(n, index) ? false : ((stopIndex = index), true));
        return stopIndex;
    })(numbers, (n, index) => n >= index));

    console.log("All elements starting from first element less than its position:"); 
    laterNumbers.forEach(n => console.log(n));
})();
