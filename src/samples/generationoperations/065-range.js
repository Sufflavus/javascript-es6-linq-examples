(function() {
    "use strict";

    let numbers = Array.apply(null, Array(50))
        .map((element, index) => index + 100)
        .map(n => ({ 
            number: n, 
            oddEven: n % 2 === 1 ? "odd" : "even" 
        })); 
    
    numbers.forEach(n => console.log(`The number ${n.number} is ${n.oddEven}.`));
})();