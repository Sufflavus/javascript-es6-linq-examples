(function() {
    "use strict";

    var products = getProductList(); 
 
    var product12 = products.filter(p => p.ProductID === 12)[0]; 
    
    console.log(`ProductID=${product12.ProductID} ProductName=${product12.ProductName}` + 
        ` Category=${product12.Category} UnitPrice=${product12.UnitPrice} UnitsInStock=${product12.UnitsInStock}`);
})();