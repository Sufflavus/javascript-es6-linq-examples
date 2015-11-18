(function() {
    "use strict";
    
    let products = getProductList(); // function getProductList is in the file datacontext.js     

    let productNames = products.map(p => p.ProductName);

    console.log("Product Names:");
    productNames.forEach(productName => console.log(productName));
})();
