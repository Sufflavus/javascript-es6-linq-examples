(function() {
    "use strict";

    let customers = getCustomerList();

    let orderCounts = customers.map(c => ({ 
            customerId: c.CustomerId, 
            orderCount: c.Orders.length 
        })); 

    orderCounts.forEach(c => console.log(`CustomerID=${c.customerId}  OrderCount=${c.orderCount}`));
})();