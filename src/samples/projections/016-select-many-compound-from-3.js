(function() {    
    "use strict";
    
    let customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
    let cutoffDate = (new Date(1998, 0, 1)).getTime();

    let orders = customers.map(customer => {
        return customer.Orders.filter(order => (new Date(order.OrderDate)).getTime() >= cutoffDate)
            .map(order => {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId,
                    orderDate: order.OrderDate
                };
            });
    }).reduce((arr1, arr2) => arr1.concat(arr2));

    orders.forEach(order => console.log(`CustomerID=${order.customerId} OrderID=${order.orderId} OrderDate=${order.orderDate}`));
})();
