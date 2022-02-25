class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    get totalCost() {
        return this.storage.reduce((acc, e) => acc + e.price * e.quantity, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let toPrint = [];
        this.storage.forEach(e => {
            toPrint.push(JSON.stringify(e));
        });

        return toPrint.join('\n');
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 }
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 }
let productThree = { name: 'Bread', price: 1.10, quantity: 8 }
let storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
storage.getProducts()
console.log(storage.capacity)
console.log(storage.totalCost)