(function() {    
    "use strict";
    
    let customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    let cutoffDate = new Date(1997, 0, 1); 
    
    let orders = customers.filter(customer => customer.Region === "WA").map(customer => {
        return customer.Orders.filter(order => (new Date(order.OrderDate)).getTime() >= cutoffDate.getTime())
            .map(order => {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId
                };
            });
    }).reduce((arr1, arr2) => arr1.concat(arr2), []);

    orders.forEach(order => console.log(`CustomerID=${order.customerId} OrderID=${order.orderId}`));    
})();
