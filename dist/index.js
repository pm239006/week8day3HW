"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");

class Product {
    constructor(description,price, ) {
        this.id$ = ("", uuid_1)();
        this.description$ = description;
        this.price$ = price;
    }
        get id() {
        return this.id$;
    }
    get description() {
        return this.description$;
    }
    set description(value) {
        this.description$ = value;
    }
    get price() {
        return this.price$;
    }
    set price(value) {
        this.price$ = value;
    }

}

class Customer {
    constructor(name, age) {
        this.cart$ = [];
        this.id$ = (0, uuid_1)();
        this.name$ = name;
        this.age$ = age;
    }
    get id() {
        return this.id$;
    }
    get name() {
        return this.name$;
    }
    set name(value) {
        this.name$ = value;
    }
    get age() {
        return this.age$;
    }
    set age(value) {
        this.age$ = value;
    }
    get cart() {
        return this.cart$;
    }
    addToCart(item) {
        this.cart$.push(item);
    }
    removeFromCart(item) {
        this.cart$ = this.cart$.filter(cartItem => cartItem.id !== item.id);
    }
    removeQuantityFromCart(item, quantity) {
        // keep a count of the quantity
        let count = 0;
        this.cart$ = this.cart$.filter(cartItem => {
            if (cartItem.id === item.id && count < quantity) {
                count++;
                return false;
            }
            return true;
        });
    }
    cartTotal() {
        return this.cart$.reduce((total, item) => total + item.price, 0);
    }
    printCart() {
        console.log(this.cart$);
    }
}


class Item extends Product {
}
class User extends Customer {
}



function createItem(description,price) {
    return new Item(description,price);
}
function createUser(name, age) {
    return new User(name, age);
}




const action = () => {
    const user = createUser("Priscilla Mendez", 25);
    const drBronners = createItem("Dr. Bronners", 16.00);
    const cloroxBleach = createItem("Clorox Bleach", 2.50);
    const aloePlant = createItem("Aloe Plant", 4.00);
    const Laptop = createItem("Laptop", 2000.00);


    user.addToCart(drBronners);
    user.printCart();
    console.log("Total:", user.cartTotal().toFixed(2));

    user.addToCart(cloroxBleach);
    user.addToCart(aloePlant);
    user.addToCart(Laptop);
    user.printCart();
    console.log("Total:", user.cartTotal().toFixed(2));
  
    user.removeFromCart(aloePlant)
    user.removeFromCart(cloroxBleach)
    user.printCart();
    console.log("Total:", user.cartTotal().toFixed(2))

};
action()