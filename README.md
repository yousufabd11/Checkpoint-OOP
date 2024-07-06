# Shopping Cart

This is a simple implementation of a shopping cart using Object Oriented Programming (OOP). The cart allows adding, removing, and Listing items, as well as calculating the total items and price.

## Classes

### Product

Represents a product with id, name, and price.

### ShoppingCartItem

Represents an item in the shopping cart with a product and its quantity. Includes a method to calculate the total price of the item.

### ShoppingCart

Manages the shopping cart, which is an array of ShoppingCartItem instances. Includes methods to:
- Add items
- Remove items
- Get total items
- Get total price
- Display cart items

## Usage

```javascript
// Creating products
const product1 = new Product(1, 'Laptop', 1500);
const product2 = new Product(2, 'Phone', 800);
const product3 = new Product(3, 'Tablet', 400);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Displaying the cart
cart.displayCart();

// Removing an item from the cart
cart.removeItem(2);

// Displaying the cart again after removal
cart.displayCart();

// Display total items and total price
console.log(`Total Items: ${cart.getTotalItems()}`);
console.log(`Total Price: ${cart.getTotalPrice()}`);
