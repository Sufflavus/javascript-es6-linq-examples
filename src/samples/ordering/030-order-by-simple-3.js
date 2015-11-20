(function() {
    "use strict";

    let products = getProductList(); 

    let sortedProducts = products.slice().sort((p1, p2) => {
        if (p1.ProductName < p2.ProductName) {
            return -1;
        }
        if (p1.ProductName > p2.ProductName) {
            return 1;
        }
        return 0;
    });
    
    sortedProducts.forEach(product => console.log(`ProductID=${product.ProductID} ProductName=${product.ProductName} ` +
        `Category=${product.Category} UnitPrice=${product.UnitPrice} UnitsInStock=${product.UnitsInStock}`));
})();
