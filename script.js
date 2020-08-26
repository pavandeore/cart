import { data }  from "./data.js";

let smart = document.querySelector("#smart");
let cart = document.querySelector("#logo");
// let plus = document.querySelector("#btn1");
// let minus = document.querySelector("#btn2");
// let quanDiv = document.querySelector("#quan");
let checkDivMain = document.querySelector("#checkDivMain");
let card = document.querySelector("#card");
let checkDiv = document.createElement('li');
let item_title = document.querySelector("#item-title");
let item_desc = document.querySelector("#item-description");
let item_price = document.querySelector("#priceDiv");
let price = 1;
let quan = 0;




data.forEach((e)=>{

  let li = document.createElement('li');

      li.innerHTML = `
      <h2 id="item-title">${e.title}</h2>
      <p id="item-description">${e.description}</p>
      <div>
        <p>Price :- </p>
        <div id="priceDiv">$ ${e.price}</div>
        <span id="quan">0</span>
        <div id="btn1"><img src="assets/plus.png"/></div>
        <div id="btn2"><img src="assets/minus.png"/></div>
      </div>
      `;
      card.appendChild(li);
})

let plus = document.querySelector("#btn1");
let minus = document.querySelector("#btn2");
let quanDiv = document.querySelector("#quan");

function cartHandle(e){
 
  quanDiv.innerHTML = quan;
  cart.innerHTML = `${quan*price}`;
  checkDiv.setAttribute('class','list-style');
  checkDiv.innerHTML = `
   <ul id="checkDiv">
    <li><h4>Item 1</h4><a>X</a><p>${quan}</p><a>=</a><p>${quan*price}</p><button id="btn3"><a href="https://paypal.me/pduser">Checkout</a></button></li>
  </ul>  `;
  
  cart.addEventListener("click",function(){
    checkDivMain.appendChild(checkDiv);
  })
}

function plusHandle(e){
  quan++;
  cartHandle(e);
  
}

function minusHandle(e){
  if(quan<=0) return alert('Not alllowed');
  quan--;
  cartHandle(e);
  
}

plus.addEventListener("click",plusHandle);
minus.addEventListener("click",minusHandle);
