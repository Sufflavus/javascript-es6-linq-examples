(function() {
    "use strict";
    
    let products = getProductList(); 

    let soldOutProducts = products.filter(p => p.UnitsInStock === 0);

    console.log("Sold out products:"); 
    soldOutProducts.forEach(product => console.log(`${product.ProductName} is sold out!`));
})();
