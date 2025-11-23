async function getProducts(){
 return fetch('products.json').then(r=>r.json());
}

async function loadProducts(){
 let products=await getProducts();
 let cat=document.getElementById('catFilter').value;
 let grid=document.getElementById('productGrid');
 grid.innerHTML="";

 products
  .filter(p=>cat==="ALL" || p.category===cat)
  .forEach(p=>{
   grid.innerHTML += `
     <div class="product-card" onclick="openProduct(${p.id})">
       <img src="${p.img}">
       <h3>${p.name}</h3>
       <p>₹${p.price}</p>
     </div>
   `;
 });
}

async function openProduct(id){
 localStorage.setItem("openProduct",id);
 window.location="product.html";
}

async function loadProductDetails(){
 let id=localStorage.getItem("openProduct");
 let products=await getProducts();
 let p=products.find(x=>x.id==id);
 document.getElementById('productDetails').innerHTML = `
   <div class="single">
     <img src="${p.img}">
     <div>
      <h2>${p.name}</h2>
      <p>${p.desc}</p>
      <h3>₹${p.price}</h3>
      <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
     </div>
   </div>
 `;
}

// CART
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

 cart.forEach(i=>{
   div.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
   total+=i.price;
 });

 document.getElementById('totalPrice').innerText="Total: ₹"+total;
}

// SEARCH SYSTEM
async function searchProducts(){
 let text=document.getElementById('searchInput').value.toLowerCase();
 let products=await getProducts();
 let box=document.getElementById('searchResults');
 box.innerHTML="";

 products
   .filter(p=>p.name.toLowerCase().includes(text))
   .forEach(p=>{
     box.innerHTML+=`
      <div class="product-card" onclick="openProduct(${p.id})">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
     `;
   });
}

window.onload=()=>{
 if(document.getElementById('productGrid')) loadProducts();
 if(document.getElementById('cartItems')) loadCart();
 if(document.getElementById('productDetails')) loadProductDetails();
};
