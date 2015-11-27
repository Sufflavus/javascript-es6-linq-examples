(function() {
    "use strict";
    
    let products = getProductList();

    let categoryNames = new Set(products.map(p => p.Category));

    console.log("Category names:");
    categoryNames.forEach(n => console.log(n));
})();