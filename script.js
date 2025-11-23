// Save users in localStorage
function registerUser(){
 let name=document.getElementById('regName').value;
 let email=document.getElementById('regEmail').value;
 let pass=document.getElementById('regPass').value;

 let users=JSON.parse(localStorage.getItem('users')||'[]');
 users.push({name,email,pass});
 localStorage.setItem('users',JSON.stringify(users));

 document.getElementById('regMsg').innerText='Registration Successful!';
 return false;
}

function loginUser(){
 let email=document.getElementById('loginEmail').value;
 let pass=document.getElementById('loginPass').value;

 let users=JSON.parse(localStorage.getItem('users')||'[]');

 let found=users.find(u=>u.email===email && u.pass===pass);

 if(found){
   document.getElementById('loginMsg').innerText='Login Successful!';
 } else {
   document.getElementById('loginMsg').innerText='Invalid Credentials!';
 }
 return false;
}

// CART SYSTEM
function addToCart(name,price){
 let cart=JSON.parse(localStorage.getItem('cart')||'[]');
 cart.push({name,price});
 localStorage.setItem('cart',JSON.stringify(cart));
 alert("Added to cart!");
}

function loadCart(){
 let cart=JSON.parse(localStorage.getItem('cart')||'[]');
 let div=document.getElementById('cartItems');
 let total=0;

 cart.forEach(item=>{
   div.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
   total+=item.price;
 });

 document.getElementById('totalPrice').innerText="Total: ₹"+total;
}
