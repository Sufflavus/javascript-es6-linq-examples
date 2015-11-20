(function() {
    "use strict";

    let doubles = [1.7, 2.3, 1.9, 4.1, 2.9]; 

    let sortedDoubles = doubles.slice().sort((a, b) => b - a);

    console.log("The doubles from highest to lowest:");
    sortedDoubles.forEach(d => console.log(d));
})();
