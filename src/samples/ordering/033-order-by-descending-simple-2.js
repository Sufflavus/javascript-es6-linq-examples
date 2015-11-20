(function() {
    "use strict";

    let products = getProductList(); 

    let sortedProducts = products.slice().sort((p1, p2) => p2.UnitsInStock - p1.UnitsInStock);
    
    sortedProducts.forEach(product => console.log(`ProductID=${product.ProductID} ProductName=${product.ProductName} ` +
        `Category=${product.Category} UnitPrice=${product.UnitPrice} UnitsInStock=${product.UnitsInStock}`));
})();