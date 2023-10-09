import { v4 as uuidv4 } from 'uuid'

interface ShopItem {
    id: string;
    description: string;
    price: number;
}

interface ShopUser {
    id: string;
    name: string;
    age: number;
    cart: ShopItem[];

    addToCart(item: ShopItem): void;
    removeFromCart(item: ShopItem): void;
    removeQuantityFromCart(item: ShopItem, quantity: number): void
    cartTotal(): number;
    printCart(): void;
}

class Product implements ShopItem {
    private id$: string;
    private description$: string;
    private price$: number;

    constructor(description: string, price: number){
        this.id$ = uuidv4();
        this.description$ = description;
        this.price$ = price;
    }

    get id(): string {
        return this.id$;
    }

    // set id(value:string) {
    //     this.id$ = value;
    // }
    get description(): string {
        return this.description$;
    }

    set description(value: string){
        this.description$ = value;
    }

    get price(): number {
        return this.price$;
    }

    set price(value: number) {
        this.price$ = value;
    }

 
}

class Customer implements ShopUser{
    private id$: string;
    private name$: string;
    private age$: number;
    private cart$: ShopItem[] = [];

    constructor(name: string, age: number){
        this.id$ = uuidv4();
        this.name$ = name;
        this.age$ = age;
    }

    get id(): string {
        return this.id$;
    }
 // set id(value:string) {
 //     this.id$ = value;
// }
    
    get name(): string {
        return this.name$
    }

    set name(value: string) {
        this.name$ = value;
    }

    get age(): number {
        return this.age$;
    }

    set age(value: number) {
        this.age$ = value;
    }

    get cart(): ShopItem[] {
        return this.cart$;
    }

    addToCart(item: ShopItem){
        this.cart$.push(item);
    }

    removeFromCart(item: ShopItem){
        this.cart$ = this.cart$.filter(cartItem => cartItem.id !== item.id)
    }

    removeQuantityFromCart(item: ShopItem, quantity: number){
        let count = 0;
        this.cart$ = this.cart$.filter(cartItem => {
            if (cartItem.id === item.id && count < quantity){
                count++;
                return false;
            }
            return true
        });
    }

    cartTotal(): number {
        return this.cart$.reduce((total, item) => total + item.price, 0);
    }

    printCart() {
    }
}

// classes for items and users
class Item extends Product {}
class User extends Customer {}

// function to create prods/users
function createItem( description: string, price: number) {
    return new Item(description, price);
}

function createUser(name: string, age: number): Customer {
    return new User(name, age)
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


function printName(name:string):void {
    console.log(name)
}

printName("PRIIIII")