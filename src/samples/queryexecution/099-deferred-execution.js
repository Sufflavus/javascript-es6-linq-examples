(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    let i = 0; 
    
    function* select(array, selector) {
        for (let item of array) {
            yield selector();
        }
    }
    
    let q = select(numbers, () => ++i);
    
    for (var v of q) {
        console.log(`v = ${v} i = ${i}`); 
    }
})();