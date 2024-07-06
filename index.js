class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

//shopping cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the item already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display the cart items
    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }
}


// Create some products
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Mouse', 50);
const product3 = new Product(3, 'Keyboard', 80);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
console.log('Cart after adding items:');
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart after removing an item
console.log('Cart after removing an item:');
cart.displayCart();
