(function() {    
    "use strict";
    
    let customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
      
    let orders = customers.map(customer => {
        return customer.Orders.filter(order => order.Total >= 2000)
            .map(order => {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId,
                    total: order.Total
                };
            });
    }).reduce((arr1, arr2) => arr1.concat(arr2));

    orders.forEach(order => console.log(`CustomerID=${order.customerId} OrderID=${order.orderId} Total=${order.total}`));
})();
