(function() {
    "use strict";

    let customers = getCustomerList();
    let products = getProductList();
    
    let customerNames = customers.map(c => c.CompanyName);
    let productNames = products.map(p => p.ProductName);

    let allNames = customerNames.concat(productNames); 
        
    console.log("Customer and product names:");
    allNames.forEach(n => console.log(n));
})();