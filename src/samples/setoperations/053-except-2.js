(function() {
    "use strict";
    
    let products = getProductList();
    let customers = getCustomerList(); 

    let productFirstChars = products.map(p => p.ProductName[0]);
    let customerFirstChars = customers.map(c => c.CompanyName[0]);
    
    let productOnlyFirstChars = new Set(
        productFirstChars.filter(n => customerFirstChars.indexOf(n) === -1)
    );
    
    console.log("First letters from Product names, but not from Customer names:");
    productOnlyFirstChars.forEach(ch => console.log(ch));
})();