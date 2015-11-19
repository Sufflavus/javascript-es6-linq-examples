(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let allButFirst3Numbers = numbers.slice(((array, condition) => {
        var stopIndex = array.length;
        array.some((n, index) => condition(n, index) ? false : ((stopIndex = index), true));
        return stopIndex;
    })(numbers, n => n % 3 != 0));

    console.log("All elements starting from first element divisible by 3:"); 
    allButFirst3Numbers.forEach(n => console.log(n));
})();
