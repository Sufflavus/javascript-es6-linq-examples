(function() {
    "use strict";

    let products = getProductList(); 

    let sortedProducts = products.slice().sort((p1, p2) => {
        if (p1.Category > p2.Category) {
            return 1;
        } 
        if (p1.Category < p2.Category) { 
            return -1;
        }
        
        return p2.UnitPrice - p1.UnitPrice;
    });
    
    sortedProducts.forEach(product => console.log(`ProductID=${product.ProductID} ProductName=${product.ProductName} ` +
        `Category=${product.Category} UnitPrice=${product.UnitPrice} UnitsInStock=${product.UnitsInStock}`));
})();