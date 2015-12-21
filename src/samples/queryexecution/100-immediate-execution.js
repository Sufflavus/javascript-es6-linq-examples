(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    let i = 0; 
    
    let q = numbers.map(() => ++i); 
    
    q.forEach(v => console.log(`v = ${v} i = ${i}`));    
})();