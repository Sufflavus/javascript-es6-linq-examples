(function() {
    "use strict";

    let products = getProductList(); 
    const defaultProductValue = {};
 
    let product789 = products.filter(p => p.ProductID === 789)[0] || defaultProductValue; 
    
    console.log(`Product 789 exists: ${!product789}`);
})();