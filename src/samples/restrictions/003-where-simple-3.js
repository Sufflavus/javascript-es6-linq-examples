(function() {
    "use strict";
    
    let products = getProductList(); 

    let expensiveInStockProducts = products.filter(p => p.UnitsInStock > 0 && p.UnitPrice > 3);

    console.log("In-stock products that cost more than 3.00:"); 

    expensiveInStockProducts.forEach(product => console.log(`${product.ProductName} is ` +
        `in stock and costs more than 3.00.`));
})();
