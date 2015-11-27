(function() {
    "use strict";
    
    let products = getProductList();
    let customers = getCustomerList(); 

    let productFirstChars = products.map(p => p.ProductName[0]);
    let customerFirstChars = customers.map(c => c.CompanyName[0]);
    
    let uniqueFirstChars = new Set([...productFirstChars, ...customerFirstChars]);
    
    console.log("Unique first letters from Product names and Customer names:");
    uniqueFirstChars.forEach(ch => console.log(ch));
})();