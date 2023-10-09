// import {v4 as uuidv4} from 'uuid'
// let myUuid = uuidv4()
// (()=>{"use strict";class e{constructor(e,t){this._user=e,this._age=t}get age(){return this._age}set age(e){this._age=e}get user(){return this._user}set user(e){this._user=e}}const t=document.getElementById("loginForm");null==t||t.addEventListener("submit",(t=>{t.preventDefault();const u=document.querySelector("#userInput"),s=document.querySelector("#ageInput");console.log(null==u?void 0:u.value,null==s?void 0:s.value);const n=new e(null==u?void 0:u.value,null==s?void 0:s.value);console.log(n);const o=document.querySelector("#user-info");console.log(o),o&&(o.innerHTML=`<h1>Hello New User: ${n.user}<h1>`)}))})();

// let openCart = document.querySelector('.shoppingcart');
// let closeCart = document.querySelector('.closeCart');
// let list = document.querySelector('.list');
// let listCard= document.querySelector('.listCard');
// let body = document.querySelector('.body');
// let total = document.querySelector('.total');

// openCart.addEventListener('click', ()=>{
//     body.classList.add('active');  
// }
// )

// closeCart.addEventListener('click', ()=>{
//     body.classList.remove('active');  
// })

// let products = [
//     {
//         id:1,
//         description: "Granny Smith Apples",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSjoFXUMwCKFgvABFnWJ-BU0cZxnZXcqX4W8J_MX7uBvAj0E2tt2nmHBM-C7f98WzzVc&usqp=CAU",
//         price:'$0.99/lb'

//     },
//     {
//         id:2,
//         description:"Dr.Bronner's Soap",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRJSTQl94dJ8KQXMf-q48b-sxYXKS8aoIxlfOdMqLiUCNtpxO2TMV2wuTuaGqGXTyH4o&usqp=CAU",
//         price:"$14.99"

//     },
//     {
//         id:3,
//         description:"Bleach",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYSHTKfouAcpb5JNlJu7gXUhbDLl9b3djmA&usqp=CAU",
//         price:"$6.99"

//     },    
//     {
//         id:4,
//         description:"Book",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_tP5MMwJL6vtCIvw06YQwtQ46nRHxht2DfIqQk5VkO0gjdN8wgD1AIiXwqqV5sMauJk&usqp=CAU",
//         price:"$19.99"

//     }];

// let listCards = [];
// function initApp(){
//     products.forEach((value,key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//         <img src= "image/${value.image}"/>
//         <div class = "desc">${value.description}</div>
//         <div class = "price"> ${value.price.toLocaleString()}</div>
//         <button onClick="addtoCart(${key})">Add to Cart</button> 
//         `;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addtoCart(key){
//     if(listCards[key]== null){
//         listCards[key] = products[key];
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
    
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value,key) => {
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;

//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//             <div><img src= "image/${value.image}"/>
//             <div class = "desc">${value.description}</div>
//             <div class = "price"> ${value.price.toLocaleString()}</div>
//             <div>
//                 <button onClick="changeQuantity(${key},${value.quantity - 1})">-</button> 
//                 <div class="count">${value.quantity}</div>
//                 <button onClick="changeQuantity(${key},${value.quantity + 1})">+</button> 

//             </div>
//             `;
//             listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
