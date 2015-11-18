(function() {
    "use strict";
    
    let customers = getCustomerList(); 

    let waCustomers = customers.filter(c => c.Region === "WA");

    console.log("Customers from Washington and their orders:"); 

    waCustomers.forEach(function(customer) {
        console.log(`Customer ${customer.CustomerId}: ${customer.CompanyName}`); 

        customer.Orders.forEach(function(order) {
            console.log(`  Order ${order.OrderId}: ${order.OrderDate}`); 
        });
    });
})();
