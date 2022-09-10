///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((sumOfFood, cart) => {
    return sumOfFood + cart.price;
}, 0);

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax) {
    finalPrice = cartTotal * tax;
    finalPrice += cartTotal;
    finalPrice -= couponValue;
    return finalPrice;
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The customer object needs a customer name, 
    customer email, cusotmer address, customer phone number,
    purchase history, preferred order.
    The customer name is important so we know who the customer is. This will be a string.
    The email will probably be the way the user logs in to their account. This will be a string as well.
    The address should be saved for deliveries and billing information. The address will also be a string.
    The phone number is good to have in case you need to contact them. This could be an integer, but since
    we don't need to manipulate it, it will be a string.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    customerName: "sam m",
    customerAddress: "123 hello st",
    customerEmail: "sam@email.com",
    customerPhone: "555-555-5555",
}
