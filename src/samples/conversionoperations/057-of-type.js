(function() {
    "use strict";

    let numbers = [null, 1.0, "two", 3, "four", 5, "six", 7.0];

    let doubles = numbers.filter(n => n === Number(n) && n % 1 !== 0);

    console.log("Numbers stored as doubles:"); 
    doubles.forEach(d => console.log(d));
})();