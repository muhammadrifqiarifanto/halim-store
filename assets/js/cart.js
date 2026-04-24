function addToCart(nama, harga, gambar){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let existing = cart.find(item => item.nama === nama);

if(existing){
    existing.qty += 1;
}else{
    cart.push({
        nama,
        harga,
        gambar,
        qty:1
    });
}

localStorage.setItem("cart", JSON.stringify(cart));

alert("Produk masuk keranjang 🛒");
}


function tampilCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-items");
let total = 0;

if(!container) return;

container.innerHTML = "";

cart.forEach((item,index)=>{

let hargaAngka =
parseInt(item.harga.replace(/[^0-9]/g,""));

total += hargaAngka * item.qty;

container.innerHTML += `
<div class="card">

<img src="${item.gambar}">

<h3>${item.nama}</h3>

<p>${item.harga}</p>

<div style="display:flex;gap:10px;justify-content:center">

<button onclick="kurangQty(${index})">➖</button>

<span>${item.qty}</span>

<button onclick="tambahQty(${index})">➕</button>

</div>

<button onclick="hapusItem(${index})"
class="btn-beli"
style="background:red;margin-top:10px">
Hapus
</button>

</div>
`;

});

document.getElementById("total-harga")
.innerText = "Total : Rp " + total.toLocaleString();

localStorage.setItem("cart", JSON.stringify(cart));
}

tampilCart();


function tambahQty(index){

let cart = JSON.parse(localStorage.getItem("cart"));

cart[index].qty++;

localStorage.setItem("cart", JSON.stringify(cart));

tampilCart();
}


function kurangQty(index){

let cart = JSON.parse(localStorage.getItem("cart"));

cart[index].qty--;

if(cart[index].qty <= 0){
cart.splice(index,1);
}

localStorage.setItem("cart", JSON.stringify(cart));

tampilCart();
}


function hapusItem(index){

let cart = JSON.parse(localStorage.getItem("cart"));

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

tampilCart();
}


function checkoutWA(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
alert("Keranjang kosong");
return;
}

let pesan = "Halo saya ingin pesan:%0A";

cart.forEach(item=>{
pesan +=
"- "+item.nama+
" x"+item.qty+
"%0A";
});

window.open(
"https://wa.me/6281329363474?text="+pesan,
"_blank"
);

localStorage.removeItem("cart");

}