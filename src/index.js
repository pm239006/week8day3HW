"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Product = /** @class */ (function () {
    function Product(description, price) {
        this.id$ = (0, uuid_1.v4)();
        this.description$ = description;
        this.price$ = price;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this.id$;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "description", {
        // set id(value:string) {
        //     this.id$ = value;
        // }
        get: function () {
            return this.description$;
        },
        set: function (value) {
            this.description$ = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this.price$;
        },
        set: function (value) {
            this.price$ = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Customer = /** @class */ (function () {
    function Customer(name, age) {
        this.cart$ = [];
        this.id$ = (0, uuid_1.v4)();
        this.name$ = name;
        this.age$ = age;
    }
    Object.defineProperty(Customer.prototype, "id", {
        get: function () {
            return this.id$;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "name", {
        // set id(value:string) {
        //     this.id$ = value;
        // }
        get: function () {
            return this.name$;
        },
        set: function (value) {
            this.name$ = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this.age$;
        },
        set: function (value) {
            this.age$ = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "cart", {
        get: function () {
            return this.cart$;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.addToCart = function (item) {
        this.cart$.push(item);
    };
    Customer.prototype.removeFromCart = function (item) {
        this.cart$ = this.cart$.filter(function (cartItem) { return cartItem.id !== item.id; });
    };
    Customer.prototype.removeQuantityFromCart = function (item, quantity) {
        var count = 0;
        this.cart$ = this.cart$.filter(function (cartItem) {
            if (cartItem.id === item.id && count < quantity) {
                count++;
                return false;
            }
            return true;
        });
    };
    Customer.prototype.cartTotal = function () {
        return this.cart$.reduce(function (total, item) { return total + item.price; }, 0);
    };
    Customer.prototype.printCart = function () {
    };
    return Customer;
}());
// classes for items and users
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Item;
}(Product));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(Customer));
// function to create prods/users
function createItem(description, price) {
    return new Item(description, price);
}
function createUser(name, age) {
    return new User(name, age);
}
var action = function () {
    var user = createUser("Priscilla Mendez", 25);
    var drBronners = createItem("Dr. Bronners", 16.00);
    var cloroxBleach = createItem("Clorox Bleach", 2.50);
    var aloePlant = createItem("Aloe Plant", 4.00);
    var Laptop = createItem("Laptop", 2000.00);
    user.addToCart(drBronners);
    user.printCart();
    console.log("Total:", user.cartTotal().toFixed(2));
    user.addToCart(cloroxBleach);
    user.addToCart(aloePlant);
    user.addToCart(Laptop);
    user.printCart();
    console.log("Total:", user.cartTotal().toFixed(2));
    user.removeFromCart(aloePlant);
    user.removeFromCart(cloroxBleach);
    user.printCart();
    console.log("Total:", user.cartTotal().toFixed(2));
};
action();
function printName(name) {
    console.log(name);
}
printName("PRIIIII");
