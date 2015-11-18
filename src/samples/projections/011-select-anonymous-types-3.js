(function() {
    "use strict";
    
    let products = getProductList();  // function getProductList is in the file datacontext.js  
    
    let productInfos = products.map(p => {
        return { 
            productName: p.ProductName, 
            category: p.Category,
            unitPrice: p.UnitPrice
        };
    });

    console.log("Product Info:"); 
    
    productInfos.forEach(productInfo => 
        console.log(`${productInfo.productName} is in the category ${productInfo.category} ` +
            `and costs ${productInfo.unitPrice} per unit.`));
})();
