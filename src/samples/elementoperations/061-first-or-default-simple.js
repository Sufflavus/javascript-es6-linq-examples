(function() {
    "use strict";

    let numbers = []; 
    const intDefaultValue = 0;
    
    let firstNumOrDefault = numbers[0] || intDefaultValue;

    console.log(firstNumOrDefault);
})();