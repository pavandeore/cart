let note = document.querySelector("#note");

let cart = document.querySelector("#logo");
let plus = document.querySelector("#btn1");
let minus = document.querySelector("#btn2");
let quanDiv = document.querySelector("#quan");
let checkDivMain = document.querySelector("#checkDivMain");
let checkDiv = document.createElement('li');
let price = 5;
let quan = 0;

function cartHandle(){
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

function plusHandle(){
  quan++;
  cartHandle()
}

function minusHandle(){
  if(quan<=0) return alert('Not alllowed');
  quan--;
  cartHandle()
}

plus.addEventListener("click",plusHandle);
minus.addEventListener("click",minusHandle);

setTimeout(()=>{
document.body.removeChild(note);
},10000)


