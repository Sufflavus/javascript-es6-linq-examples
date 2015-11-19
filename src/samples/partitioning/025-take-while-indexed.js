(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let firstSmallNumbers = numbers.slice(0, ((array, condition) => {
        var stopIndex = array.length;
        array.some((n, index) => condition(n, index) ? false : ((stopIndex = index), true));
        return stopIndex;
    })(numbers, (n, index) => n >= index));

    console.log("First numbers not less than their position:"); 
    firstSmallNumbers.forEach(n => console.log(n));
})();
