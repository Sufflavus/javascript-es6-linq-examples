(function() {
    "use strict";
    
    let products = getProductList();
    let customers = getCustomerList(); 

    let productFirstChars = products.map(p => p.ProductName[0]);
    let customerFirstChars = customers.map(c => c.CompanyName[0]);
    
    let commonFirstChars = new Set(
        productFirstChars.filter(n => customerFirstChars.indexOf(n) != -1)
    );
    
    console.log("Common first letters from Product names and Customer names:");
    commonFirstChars.forEach(ch => console.log(ch));
})();